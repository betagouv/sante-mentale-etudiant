import { AddressResult, findAddresses } from "@/services/address";
import Input from "@codegouvfr/react-dsfr/Input";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./InputAddress.module.scss";

const DEBOUCE_MS = 300;

type Props = {
  postcode: string;
  setPostcode: Dispatch<SetStateAction<string>>;
};

export default function InputAddress({ postcode, setPostcode }: Props) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [results, setResults] = useState<AddressResult[]>([]);
  const [inputValue, setInputValue] = useState(postcode);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onInternalChange = (newValue: string) => {
    setInputValue(newValue);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setLoading(true);
    timeoutRef.current = setTimeout(async () => {
      const res = await findAddresses(newValue);
      setResults(res);
      setLoading(false);
      setIsOpen(true);
    }, DEBOUCE_MS);
  };

  const onSelect = (result: AddressResult) => {
    setInputValue(result.label);
    setPostcode(result.postcode);
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <Input
        iconId="fr-icon-map-pin-2-line"
        label="Ville, code postal"
        nativeInputProps={{
          onChange: (e) => onInternalChange(e.target.value),
          value: inputValue,
          onFocus: () => results.length > 0 && setIsOpen(true),
          autoComplete: "off",
        }}
        className={styles.input}
      ></Input>
      {loading && <p className={styles.status}>Recherche...</p>}
      {isOpen && results.length > 0 && (
        <ul className={styles.dropdown}>
          {results.map((result) => (
            <li key={result.label}>
              <button type="button" className={styles.option} onClick={() => onSelect(result)}>
                {result.label} - {result.postcode}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { useSearchParams, useRouter } from "next/navigation";

export function useQueryState(key: string, defaultValue = false) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const value = searchParams.get(key) === "true";

    const setValue = (next: boolean) => {
        const params = new URLSearchParams(searchParams.toString());
        next ? params.set(key, "true") : params.delete(key);
        router.replace(`?${params.toString()}`);
    };

    return [value, setValue] as const;
}
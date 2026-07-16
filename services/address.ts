const ADDRESS_API_URL = "https://data.geopf.fr/geocodage/search/";
const TIMEOUT_MS = 5000;

type Coordinate = {
  longitude: number;
  latitude: number;
};
export type AddressResult = {
  city: string;
  label: string;
  coordinates: Coordinate;
  postcode: string;
};
type ApiResult = {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      label: string;
      city: string;
      postcode: string;
      score: number;
    };
  }[];
};

export const findAddresses = async (query: string, limit = 5) => {
  if (!query || query.length < 3) {
    return [];
  }

  try {
    const params = new URLSearchParams({
      q: query,
      limit: String(Math.max(1, limit)),
    });

    params.set("type", "municipality");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(`${ADDRESS_API_URL}?${params}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Address API returned ${response.status}`);
    }

    const data = (await response.json()) as ApiResult;

    const apiResults: AddressResult[] = data?.features
      ? data.features.map((feature) => ({
          label: feature.properties.label,
          city: feature.properties.city,
          coordinates: {
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1],
          },
          postcode: feature.properties.postcode,
        }))
      : [];

    const uniqueResults = apiResults.filter(
      (result, index, self) => index === self.findIndex((r) => r.label === result.label)
    );

    return uniqueResults;
  } catch (error) {
    console.error("Error searching addresses:", error);
    return [];
  }
};

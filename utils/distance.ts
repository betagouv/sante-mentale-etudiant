import { Coordinate } from "@/services/address";

const MAX_DISTANCE_KM = 80;

const getDistanceKm = (c1: Coordinate, c2: Coordinate): number => {
  const R = 6371; // Earth radius in km
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(c2.latitude - c1.latitude);
  const dLon = toRad(c2.longitude - c1.longitude);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(c1.latitude)) * Math.cos(toRad(c2.latitude)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

export const getClosestItem = <T extends Coordinate>(center: Coordinate, items: T[]): T | null => {
  const closestItems = items
    .map((_item) => ({
      item: _item,
      distance: getDistanceKm(center, { latitude: _item.latitude, longitude: _item.longitude }),
    }))
    .filter(({ distance }) => distance <= MAX_DISTANCE_KM)
    .sort((a, b) => a.distance - b.distance);
  if (closestItems.length === 0) {
    return null;
  }
  return closestItems[0].item;
};

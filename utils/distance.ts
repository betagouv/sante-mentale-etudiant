import { Coordinate } from "@/services/address";

const LONG_DISTANCE_KM = 50;
const SHORT_DISTANCE_KM = 7;
const MAX_NB_ITEMS = 4;

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

type WithDistance<T> = { item: T; distance: number };

const getItemsWithinRange = <T extends Coordinate>(
  items: WithDistance<T>[],
  range: number
): WithDistance<T>[] =>
  items.filter(({ distance }) => distance <= range).sort((a, b) => a.distance - b.distance);

const getItemsLimitNb = <T extends Coordinate>(items: WithDistance<T>[]) =>
  items.slice(0, MAX_NB_ITEMS).map((it) => it.item);

export const getClosestItems = <T extends Coordinate>(
  center: Coordinate,
  items: T[]
): T[] | null => {
  const itemsWithDist = items.map((_item) => ({
    item: _item,
    distance: getDistanceKm(center, { latitude: _item.latitude, longitude: _item.longitude }),
  }));

  const veryCloseItems = getItemsWithinRange(itemsWithDist, SHORT_DISTANCE_KM);

  // if we have items within INCLUDE_DISTANCE_KM, return them all
  if (veryCloseItems.length > 0) {
    return getItemsLimitNb(veryCloseItems);
  }

  const notSoCloseItems = getItemsWithinRange(itemsWithDist, LONG_DISTANCE_KM);

  if (notSoCloseItems.length === 0) {
    return null;
  }
  return getItemsLimitNb(notSoCloseItems);
};

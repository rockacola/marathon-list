import { Festival } from "@/types/Festival";
import { loadFestivals } from "../data/loaders";

/**
 * Get a festival by its ID
 */
export const getFestivalById = (festivalId: string): Festival | undefined => {
  const festivals = loadFestivals();
  return festivals.find((f) => f.id === festivalId);
};

/**
 * Get all festivals
 */
export const getAllFestivals = (): Festival[] => {
  return loadFestivals();
};

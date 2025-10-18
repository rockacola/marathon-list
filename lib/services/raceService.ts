import { Race } from "@/types/Race";
import { loadRaces } from "../data/loaders";

/**
 * Get all races for a specific event
 */
export const getRacesByEventId = (eventId: string): Race[] => {
  const races = loadRaces();
  return races.filter((r) => r.event_id === eventId);
};

/**
 * Get all races
 */
export const getAllRaces = (): Race[] => {
  return loadRaces();
};

/**
 * Get a race by its ID
 */
export const getRaceById = (raceId: string): Race | undefined => {
  const races = loadRaces();
  return races.find((r) => r.id === raceId);
};

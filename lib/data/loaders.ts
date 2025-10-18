import { Event } from "@/types/Event";
import { Festival } from "@/types/Festival";
import { Race } from "@/types/Race";
import eventsData from "@/data/events.json";
import festivalsData from "@/data/festivals.json";
import racesData from "@/data/races.json";

/**
 * Load all events from the data source
 */
export const loadEvents = (): Event[] => {
  return eventsData as Event[];
};

/**
 * Load all festivals from the data source
 */
export const loadFestivals = (): Festival[] => {
  return festivalsData as Festival[];
};

/**
 * Load all races from the data source
 */
export const loadRaces = (): Race[] => {
  return racesData as Race[];
};

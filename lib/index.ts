/**
 * Public API for marathon list services
 *
 * This is the single entry point for all data access in the application.
 * Components should import from '@/lib' rather than directly from services.
 */

// Event Services
export {
  getEventById,
  getAllEvents,
  getUpcomingEvents,
  getSimilarFestivalEvents,
  getSameFestivalEvents,
} from "./services/eventService";

// Festival Services
export { getFestivalById, getAllFestivals } from "./services/festivalService";

// Race Services
export {
  getRacesByEventId,
  getAllRaces,
  getRaceById,
} from "./services/raceService";

// Event Helpers
export { getEventYear, getEventImagePath } from "./helpers/eventHelpers";

// Data Loaders (if needed for advanced use cases)
export { loadEvents, loadFestivals, loadRaces } from "./data/loaders";

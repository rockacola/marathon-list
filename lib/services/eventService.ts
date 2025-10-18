import { Event } from "@/types/Event";
import { loadEvents } from "../data/loaders";
import { getEventYear } from "../helpers/eventHelpers";

/**
 * Get an event by its ID
 */
export const getEventById = (eventId: string): Event | undefined => {
  const events = loadEvents();
  return events.find((e) => e.id === eventId);
};

/**
 * Get all events
 */
export const getAllEvents = (): Event[] => {
  return loadEvents();
};

/**
 * Get upcoming events (events happening after today)
 * @param limit - Maximum number of events to return (default: 5)
 */
export const getUpcomingEvents = (limit: number = 5): Event[] => {
  const events = loadEvents();
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison

  return events
    .filter((e) => {
      const eventDate = new Date(e.main_date);
      return eventDate >= today;
    })
    .sort((a, b) => {
      return new Date(a.main_date).getTime() - new Date(b.main_date).getTime();
    })
    .slice(0, limit);
};

/**
 * Get events from different festivals that occur in the same year
 * @param eventId - The current event ID
 * @param limit - Maximum number of events to return
 */
export const getSimilarFestivalEvents = (
  eventId: string,
  limit: number = 3
): Event[] => {
  const events = loadEvents();
  const currentEvent = events.find((e) => e.id === eventId);

  if (!currentEvent) {
    return [];
  }

  const currentYear = getEventYear(currentEvent);

  return events
    .filter((e) => {
      const eYear = getEventYear(e);
      return (
        eYear === currentYear && e.festival_id !== currentEvent.festival_id
      );
    })
    .slice(0, limit);
};

/**
 * Get events from the same festival but different years
 * @param eventId - The current event ID
 * @param limit - Maximum number of events to return
 */
export const getSameFestivalEvents = (
  eventId: string,
  limit: number = 3
): Event[] => {
  const events = loadEvents();
  const currentEvent = events.find((e) => e.id === eventId);

  if (!currentEvent) {
    return [];
  }

  return events
    .filter(
      (e) => e.festival_id === currentEvent.festival_id && e.id !== eventId
    )
    .sort((a, b) => {
      return new Date(b.main_date).getTime() - new Date(a.main_date).getTime();
    })
    .slice(0, limit);
};

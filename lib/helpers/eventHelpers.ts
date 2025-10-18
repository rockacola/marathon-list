import { Event } from "@/types/Event";

/**
 * Get the year of an event
 * @param event - The event object
 * @returns The year as a number
 */
export const getEventYear = (event: Event): number => {
  return new Date(event.start_date).getFullYear();
};

/**
 * Get the image path for an event with fallback to generic image
 * @param event - The event object
 * @returns The image path
 */
export const getEventImagePath = (event: Event): string => {
  return event.image_path || "/images/events/event-generic.jpg";
};

/**
 * Determines the season based on location and date
 * @param location - The location string (e.g., "Sydney, Australia")
 * @param date - The date string in YYYY-MM-DD format
 * @returns The season name (Spring, Summer, Autumn, Winter)
 */
export const getSeason = (location: string, date: string): string => {
  const month = new Date(date).getMonth(); // 0-11 (Jan-Dec)

  // Determine if location is in Southern Hemisphere
  const southernHemisphere = isSouthernHemisphere(location);

  if (southernHemisphere) {
    // Southern Hemisphere seasons
    if (month >= 8 && month <= 10) return "Spring"; // Sep-Nov
    if (month >= 11 || month <= 1) return "Summer"; // Dec-Feb
    if (month >= 2 && month <= 4) return "Autumn"; // Mar-May
    return "Winter"; // Jun-Aug
  } else {
    // Northern Hemisphere seasons
    if (month >= 2 && month <= 4) return "Spring"; // Mar-May
    if (month >= 5 && month <= 7) return "Summer"; // Jun-Aug
    if (month >= 8 && month <= 10) return "Autumn"; // Sep-Nov
    return "Winter"; // Dec-Feb
  }
};

/**
 * Determines if a location is in the Southern Hemisphere
 * @param location - The location string
 * @returns true if Southern Hemisphere, false if Northern Hemisphere
 */
const isSouthernHemisphere = (location: string): boolean => {
  const southernCountries = [
    "Australia",
    "New Zealand",
    "South Africa",
    "Argentina",
    "Brazil",
    "Chile",
    "Uruguay",
    "Paraguay",
    "Peru",
    "Bolivia",
    "Madagascar",
    "Mozambique",
    "Zimbabwe",
    "Botswana",
    "Namibia",
    "Indonesia",
    "East Timor",
    "Papua New Guinea",
    "Fiji",
    "Samoa",
  ];

  return southernCountries.some((country) =>
    location.toLowerCase().includes(country.toLowerCase())
  );
};

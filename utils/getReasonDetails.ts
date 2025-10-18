export interface ReasonDetails {
  emoji: string;
  blurb: string;
}

/**
 * Maps reason keywords to their corresponding emoji and descriptive blurb
 */
const reasonMap: Record<string, ReasonDetails> = {
  scenic: {
    emoji: "🌆",
    blurb: "Run through stunning city landscapes and breathtaking scenic views",
  },
  technical: {
    emoji: "🏃",
    blurb: "Challenge yourself on a technically demanding course",
  },
  prestigious: {
    emoji: "🏆",
    blurb: "Join one of the world's most prestigious and iconic marathon events",
  },
  memorable: {
    emoji: "🎉",
    blurb: "Create unforgettable memories with thousands of enthusiastic runners",
  },
  flat: {
    emoji: "📏",
    blurb: "Perfect for personal bests on a fast and flat course",
  },
  hilly: {
    emoji: "⛰️",
    blurb: "Conquer challenging hills and elevation changes",
  },
  coastal: {
    emoji: "🌊",
    blurb: "Experience beautiful coastal routes and ocean views",
  },
  urban: {
    emoji: "🏙️",
    blurb: "Discover the energy and landmarks of a vibrant city",
  },
  cultural: {
    emoji: "🎭",
    blurb: "Immerse yourself in rich local culture and heritage",
  },
  supportive: {
    emoji: "👏",
    blurb: "Enjoy incredible crowd support and community atmosphere",
  },
};

/**
 * Gets the emoji and blurb for a given reason keyword
 * Returns a default if the reason is not found
 */
export function getReasonDetails(reason: string): ReasonDetails {
  return (
    reasonMap[reason.toLowerCase()] || {
      emoji: "✨",
      blurb: `Experience ${reason}`,
    }
  );
}

import { Box, Text } from "@chakra-ui/react";
import { formatDateShort } from "@/utils/formatDate";

interface RaceInfoCardProps {
  label: string;
  distance: number;
  date: string;
}

/**
 * Get an emoji based on the race distance
 */
const getRaceEmoji = (distance: number): string => {
  if (distance >= 42) return "🏃"; // Full marathon
  if (distance >= 21) return "🏃‍♂️"; // Half marathon
  if (distance >= 10) return "🚶"; // 10K
  return "🚶‍♂️"; // 5K and below
};

const RaceInfoCard = ({ label, distance, date }: RaceInfoCardProps) => {
  const emoji = getRaceEmoji(distance);

  return (
    <Box
      bgColor="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="2xl"
      p={6}
      width={{ base: "100%", md: "calc(50% - 12px)" }}
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <Box display="flex" alignItems="center" gap={3}>
        <Text fontSize="32px">{emoji}</Text>
        <Text fontSize="20px" fontWeight={500}>
          {label}
        </Text>
      </Box>

      <Box display="flex" gap={4} fontSize="16px" color="gray.600">
        <Text as="span">{distance}km</Text>/
        <Text as="span">{formatDateShort(date)}</Text>
      </Box>
    </Box>
  );
};

export default RaceInfoCard;

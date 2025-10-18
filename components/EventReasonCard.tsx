import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface EventReasonCardProps {
  emoji: string;
  children: ReactNode;
}

const EventReasonCard = ({ emoji, children }: EventReasonCardProps) => {
  return (
    <Box
      bgColor="transparent"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="2xl"
      p={4}
      display="flex"
      gap={3}
      alignItems="flex-start"
    >
      <Text fontSize="24px" flexShrink={0}>
        {emoji}
      </Text>
      <Text fontSize="24px">{children}</Text>
    </Box>
  );
};

export default EventReasonCard;

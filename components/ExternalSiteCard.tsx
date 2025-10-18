import { Box, Text, Link } from "@chakra-ui/react";

interface ExternalSiteCardProps {
  url: string;
  title: string;
  description: string;
}

export default function ExternalSiteCard({
  url,
  title,
  description,
}: ExternalSiteCardProps) {
  return (
    <Box
      bgColor="white"
      borderRadius="2xl"
      p={4}
      boxShadow="0 10px 30px rgba(0, 0, 0, 0.08)"
    >
      <Text fontSize="sm" color="gray.500" mb={2} wordBreak="break-all">
        {url}
      </Text>
      <Text fontSize="lg" fontWeight={600} mb={2}>
        {title}
      </Text>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
    </Box>
  );
}

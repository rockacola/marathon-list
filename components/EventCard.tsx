import { Box, AspectRatio, Text, Link } from "@chakra-ui/react";

interface EventCardProps {
  eventTitle: string;
  festivalName: string;
  year: number;
  href?: string;
}

export default function EventCard({
  eventTitle,
  festivalName,
  year,
  href = "#",
}: SimilarRunCardProps) {
  return (
    <Link
      href={href}
      display="flex"
      gap={4}
      alignItems="center"
      height="60px"
      _hover={{
        opacity: 0.7,
        textDecoration: "none"
      }}
      transition="opacity 0.2s"
    >
      {/* Cover Image - 16:9 aspect ratio */}
      <Box height="60px" width="106.67px" flexShrink={0}>
        <Box
          bgColor="gray.200"
          borderRadius="full"
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="gray.400" fontSize="xs">
            Image
          </Text>
        </Box>
      </Box>

      {/* Event Title */}
      <Box>
        <Text fontSize="22px" fontWeight={400}>
          {festivalName} / {year}
        </Text>
      </Box>
    </Link>
  );
}

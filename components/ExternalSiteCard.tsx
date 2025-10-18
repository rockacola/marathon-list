import { Box, Link, Text } from "@chakra-ui/react";

interface ExternalSiteCardProps {
  url: string;
  title: string;
  description: string;
}

const ExternalSiteCard = ({
  url,
  title,
  description,
}: ExternalSiteCardProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      display="block"
      textDecoration="none"
      _hover={{
        textDecoration: "none",
        transform: "translateY(-2px)",
      }}
      transition="transform 0.2s"
    >
      <Box
        bgColor="white"
        borderRadius="2xl"
        p={4}
        boxShadow="0 10px 30px rgba(0, 0, 0, 0.08)"
        height="100%"
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
    </Link>
  );
};

export default ExternalSiteCard;

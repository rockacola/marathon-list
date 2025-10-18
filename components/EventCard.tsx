import { AspectRatio, Box, Image, Text, Link } from "@chakra-ui/react";
import { THUMBNAIL_IMAGE_STYLES } from "@/config/imageStyles";

interface EventCardProps {
  eventTitle: string;
  festivalName: string;
  year: number;
  imagePath: string;
  href?: string;
}

const EventCard = ({
  eventTitle,
  festivalName,
  year,
  imagePath,
  href = "#",
}: EventCardProps) => {
  return (
    <Link
      href={href}
      display="flex"
      gap={4}
      alignItems="center"
      _hover={{
        opacity: 0.7,
        textDecoration: "none",
      }}
      transition="opacity 0.2s"
    >
      {/* Cover Image - 16:9 aspect ratio */}
      <Box width="90px" flexShrink={0} title={eventTitle}>
        <AspectRatio ratio={16 / 9} height="100%">
          <Image
            src={imagePath}
            alt={eventTitle}
            objectFit="cover"
            borderRadius="md"
            {...THUMBNAIL_IMAGE_STYLES}
          />
        </AspectRatio>
      </Box>

      {/* Event Title */}
      <Box>
        <Text fontSize="22px" fontWeight={400}>
          {festivalName} / {year}
        </Text>
      </Box>
    </Link>
  );
};

export default EventCard;

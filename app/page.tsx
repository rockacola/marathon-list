import LandingHeader from "@/components/LandingHeader";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { withBasePath } from "@/utils/getBasePath";
import {
  getUpcomingEvents,
  getFestivalById,
  getEventYear,
  getEventImagePath,
} from "@/lib";
import { FEATURE_FLAGS } from "@/config/featureFlags";
import { HERO_IMAGE_STYLES } from "@/config/imageStyles";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

const Landing = () => {
  const events = getUpcomingEvents(5);

  return (
    <Box
      minH="100vh"
      bgColor="white"
      position="relative"
      display="flex"
      flexDirection="column"
    >
      <Box
        position="relative"
        zIndex={1}
        display="flex"
        flexDirection="column"
        minH="100vh"
      >
        <LandingHeader />

        {/* Hero Image - Full Width 16:9 */}
        <Box width="100%" mb={8}>
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/images/static/landing-splash.jpg"
              alt="Marathon runners"
              objectFit="cover"
              width="100%"
              height="100%"
              {...HERO_IMAGE_STYLES}
            />
          </AspectRatio>
        </Box>

        <Container maxW="container.lg" flex="1" pb={8}>
          {/* Introduction Blurb */}
          <Box mb={12}>
            <Text fontSize="36px" mb={2}>
              Your straightforward guide to marathon events worldwide.
            </Text>
            <Text fontSize="26px" fontWeight={300}>
              Browse races with clear information about dates, locations, and
              what makes each one special - no overwhelming clutter.
            </Text>
          </Box>

          {/* Full Width Search Engine */}
          {FEATURE_FLAGS.search && (
            <Box mb={12}>
              <Input
                placeholder="Search for marathons..."
                size="lg"
                bgColor="gray.100"
                border="none"
                borderRadius="full"
                px={6}
                py={7}
                fontSize="18px"
              />
            </Box>
          )}

          {/* Event List */}
          <Box>
            <Heading as="h2" fontSize="32px" fontWeight={400} mb={6}>
              Upcoming Events
            </Heading>
            <Box display="flex" flexDirection="column" gap={4}>
              {events.map((event) => {
                const festival = getFestivalById(event.festival_id);
                const year = getEventYear(event);
                const imagePath = getEventImagePath(event);

                return (
                  <EventCard
                    key={event.id}
                    eventTitle={event.name}
                    festivalName={festival?.name || "Unknown Festival"}
                    year={year}
                    imagePath={imagePath}
                    href={withBasePath(`/${event.id}`)}
                  />
                );
              })}
            </Box>
          </Box>
        </Container>

        <Footer />
      </Box>
    </Box>
  );
};

export default Landing;

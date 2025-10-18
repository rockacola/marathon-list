import { Event } from "@/types/Event";
import { Festival } from "@/types/Festival";
import eventsData from "@/data/events.json";
import festivalsData from "@/data/festivals.json";
import HeaderSimple from "@/components/HeaderSimple";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { withBasePath } from "@/utils/getBasePath";
import { AspectRatio, Box, Container, Heading, Input } from "@chakra-ui/react";

export default function Landing() {
  const events: Event[] = eventsData;
  const festivals: Festival[] = festivalsData;

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
        <HeaderSimple />

        {/* Hero Image - Full Width 16:9 */}
        <Box width="100%" mb={8}>
          <AspectRatio ratio={16 / 9}>
            <Box
              bgColor="gray.200"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Heading color="gray.500" fontSize="2xl">
                Hero Image Placeholder
              </Heading>
            </Box>
          </AspectRatio>
        </Box>

        <Container maxW="container.lg" flex="1" pb={8}>
          {/* Full Width Search Engine */}
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

          {/* Event List */}
          <Box>
            <Heading as="h2" fontSize="32px" fontWeight={400} mb={6}>
              Upcoming Events
            </Heading>
            <Box display="flex" flexDirection="column" gap={4}>
              {events.map((event) => {
                const festival = festivals.find(
                  (f) => f.id === event.festival_id
                );
                const year = new Date(event.start_date).getFullYear();

                return (
                  <EventCard
                    key={event.id}
                    eventTitle={event.name}
                    festivalName={festival?.name || "Unknown Festival"}
                    year={year}
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
}

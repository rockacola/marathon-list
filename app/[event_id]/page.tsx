import EventHeader from "@/components/EventHeader";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import InfoCardTitle from "@/components/InfoCardTitle";
import EventReasonCard from "@/components/EventReasonCard";
import ExternalSiteCard from "@/components/ExternalSiteCard";
import EventCard from "@/components/EventCard";
import RaceInfoCard from "@/components/RaceInfoCard";
import { formatPrice } from "@/utils/formatPrice";
import { getSeason } from "@/utils/getSeason";
import { formatDateShort } from "@/utils/formatDate";
import { getReasonDetails } from "@/utils/getReasonDetails";
import { withBasePath } from "@/utils/getBasePath";
import { HERO_IMAGE_STYLES } from "@/config/imageStyles";
import { notFound } from "next/navigation";
import {
  getAllEvents,
  getEventById,
  getFestivalById,
  getRacesByEventId,
  getSimilarFestivalEvents,
  getSameFestivalEvents,
  getEventYear,
  getEventImagePath,
} from "@/lib";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

// This function tells Next.js which dynamic routes to generate at build time
export const generateStaticParams = async () => {
  const events = getAllEvents();
  return events.map((event) => ({
    event_id: event.id,
  }));
};

const EventDetailPage = async ({
  params,
}: {
  params: Promise<{ event_id: string }>;
}) => {
  const { event_id } = await params;

  // Fetch data using service layer
  const event = getEventById(event_id);

  if (!event) {
    notFound();
  }

  const festival = getFestivalById(event.festival_id);

  if (!festival) {
    notFound();
  }

  const eventYear = getEventYear(event);
  const eventImagePath = getEventImagePath(event);
  const eventRaces = getRacesByEventId(event.id);
  const similarFestivalEvents = getSimilarFestivalEvents(event.id);
  const sameFestivalEvents = getSameFestivalEvents(event.id);

  return (
    <Box
      minH="100vh"
      bgColor="white"
      position="relative"
      display="flex"
      flexDirection="column"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "600px",
        bgGradient: "to-b",
        gradientFrom: "blue.50",
        gradientTo: "white",
        zIndex: 0,
      }}
    >
      <Box
        position="relative"
        zIndex={1}
        display="flex"
        flexDirection="column"
        minH="100vh"
      >
        <EventHeader />

        <Container maxW="container.lg" py={8} flex="1">
          <Box as="article" borderRadius="lg">
            <Heading as="h1" fontSize="36px" fontWeight={300} mb={14}>
              {festival.name} <Text as="span">/</Text>{" "}
              <Text as="span" color="gray.500">
                {eventYear}
              </Text>
            </Heading>

            <Box mb={16}>
              {/* Event Cover Image - 16:9 aspect ratio */}
              <AspectRatio ratio={16 / 9} mb={6}>
                <Image
                  src={eventImagePath}
                  alt={event.name}
                  objectFit="cover"
                  borderRadius="4xl"
                  {...HERO_IMAGE_STYLES}
                />
              </AspectRatio>

              {/* Info Cards */}
              <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
                {/* Country Card */}
                <InfoCard>
                  <InfoCardTitle>Location</InfoCardTitle>
                  <Text fontSize="2xl" fontWeight={300} color="gray.600">
                    {festival.location}
                  </Text>
                </InfoCard>

                {/* Date Card */}
                <InfoCard>
                  <InfoCardTitle>Date</InfoCardTitle>
                  <Text fontSize="2xl" fontWeight={300} color="gray.600">
                    {formatDateShort(event.main_date)}
                  </Text>
                  <Text fontSize="lg" fontWeight={300} color="gray.600">
                    {getSeason(festival.location, event.main_date)}
                  </Text>
                </InfoCard>

                {/* Price Card */}
                <InfoCard>
                  <InfoCardTitle>Price</InfoCardTitle>
                  <Text fontSize="2xl" fontWeight={300} color="gray.600">
                    {formatPrice(event.price_guideline)}
                  </Text>
                </InfoCard>

                {/* Participants Card */}
                <InfoCard>
                  <InfoCardTitle>Participants</InfoCardTitle>
                  <Text fontSize="2xl" fontWeight={300} color="gray.600">
                    {event.participant_count.toLocaleString()}
                  </Text>
                </InfoCard>
              </SimpleGrid>
            </Box>

            {/* Festival Description */}
            <Text fontSize="26px" fontWeight={400} lineHeight="tall" mb={16}>
              {festival.description}
            </Text>

            {/* Available Race Distances */}
            {eventRaces.length > 0 && (
              <Box mb={16}>
                <Box display="flex" gap={6} flexWrap="wrap">
                  {eventRaces.map((race) => (
                    <RaceInfoCard
                      key={race.id}
                      label={race.name}
                      distance={race.distance}
                      date={race.start_at.split("T")[0]}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* Reasons to Run */}
            {festival.reasons.length > 0 && (
              <Box mb={16}>
                <Heading as="h2" fontSize="32px" fontWeight={400} mb={6}>
                  Why run here
                </Heading>
                <Box display="flex" flexDirection="column" gap={4}>
                  {festival.reasons.map((reason) => {
                    const { emoji, blurb } = getReasonDetails(reason);
                    return (
                      <EventReasonCard key={reason} emoji={emoji}>
                        {blurb}
                      </EventReasonCard>
                    );
                  })}
                </Box>
              </Box>
            )}

            {/* Useful External Sites */}
            {event.websites.length > 0 && (
              <Box mb={16}>
                <Heading as="h2" fontSize="32px" fontWeight={400} mb={6}>
                  Useful external sites
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                  {event.websites.map((website) => (
                    <ExternalSiteCard
                      key={website.url}
                      url={website.url}
                      title={website.title}
                      description={website.blurb}
                    />
                  ))}
                </SimpleGrid>
              </Box>
            )}

            {/* Similar Runs */}
            {(similarFestivalEvents.length > 0 ||
              sameFestivalEvents.length > 0) && (
              <Box mb={16}>
                <Heading as="h2" fontSize="32px" fontWeight={400} mb={6}>
                  Similar runs
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                  {/* Similar Destination & Time */}
                  {similarFestivalEvents.length > 0 && (
                    <Box>
                      <Box display="flex" flexDirection="column" gap={4}>
                        {similarFestivalEvents.map((similarEvent) => {
                          const similarFestival = getFestivalById(
                            similarEvent.festival_id
                          );
                          const similarYear = getEventYear(similarEvent);
                          const similarImagePath =
                            getEventImagePath(similarEvent);
                          return (
                            <EventCard
                              key={similarEvent.id}
                              eventTitle={similarEvent.name}
                              festivalName={similarFestival?.name || ""}
                              year={similarYear}
                              imagePath={similarImagePath}
                              href={withBasePath(`/${similarEvent.id}`)}
                            />
                          );
                        })}
                      </Box>
                    </Box>
                  )}

                  {/* Same Festival, Different Time */}
                  {sameFestivalEvents.length > 0 && (
                    <Box>
                      <Box display="flex" flexDirection="column" gap={4}>
                        {sameFestivalEvents.map((sameEvent) => {
                          const sameYear = getEventYear(sameEvent);
                          const sameImagePath = getEventImagePath(sameEvent);
                          return (
                            <EventCard
                              key={sameEvent.id}
                              eventTitle={sameEvent.name}
                              festivalName={festival.name}
                              year={sameYear}
                              imagePath={sameImagePath}
                              href={withBasePath(`/${sameEvent.id}`)}
                            />
                          );
                        })}
                      </Box>
                    </Box>
                  )}
                </SimpleGrid>
              </Box>
            )}
          </Box>
        </Container>

        <Footer />
      </Box>
    </Box>
  );
};

export default EventDetailPage;

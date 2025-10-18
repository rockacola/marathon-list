import { Event } from "@/types/Event";
import { Festival } from "@/types/Festival";
import eventsData from "@/data/events.json";
import festivalsData from "@/data/festivals.json";
import Header from "@/components/Header";
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
import { notFound } from "next/navigation";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

// This function tells Next.js which dynamic routes to generate at build time
export async function generateStaticParams() {
  const events: Event[] = eventsData;
  return events.map((event) => ({
    event_id: event.id,
  }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await params;
  const events: Event[] = eventsData;
  const festivals: Festival[] = festivalsData;

  const event = events.find((e) => e.id === event_id);

  if (!event) {
    notFound();
  }

  const festival = festivals.find((f) => f.id === event.festival_id);

  if (!festival) {
    notFound();
  }

  const eventYear = new Date(event.start_date).getFullYear();

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
        <Header />

        <Container maxW="container.lg" py={8} flex="1">
          <Box as="article" borderRadius="lg">
            <Heading as="h1" fontSize="36px" fontWeight={300} mb={14}>
              {festival.name} <Text as="span">/</Text>{" "}
              <Text as="span" color="gray.500">
                {eventYear}
              </Text>
            </Heading>

            <Box mb={16}>
              {/* Image Placeholder - 16:9 aspect ratio */}
              <AspectRatio ratio={16 / 9} mb={6}>
                <Box
                  bgColor="gray.200"
                  borderRadius="4xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="gray.500" fontSize="lg">
                    Image Placeholder
                  </Text>
                </Box>
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
            <Box mb={16}>
              <Box display="flex" gap={6} flexWrap="wrap">
                {event.races.map((race) => (
                  <RaceInfoCard
                    key={race.id}
                    label={race.label}
                    distance={race.distance}
                    date={race.date}
                  />
                ))}
              </Box>
            </Box>

            {/* Reasons to Run */}
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

            {/* Useful External Sites */}
            <Box mb={16}>
              <Heading as="h2" fontSize="32px" fontWeight={400} mb={6}>
                Useful external sites
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                <ExternalSiteCard
                  url="https://www.marathonsite.com"
                  title="Official Marathon Website"
                  description="Complete event information, registration details, and race day logistics"
                />
                <ExternalSiteCard
                  url="https://www.trainingplan.com"
                  title="Training Resources"
                  description="Expert training plans and tips to help you prepare for the race"
                />
                <ExternalSiteCard
                  url="https://www.localtourism.com"
                  title="Local Tourism Guide"
                  description="Discover the best places to visit, eat, and stay during your trip"
                />
              </SimpleGrid>
            </Box>

            {/* Similar Runs */}
            <Box mb={16}>
              <Heading as="h2" fontSize="32px" fontWeight={400} mb={6}>
                Similar runs
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                {/* Similar Destination & Time */}
                <Box>
                  <Box display="flex" flexDirection="column" gap={4}>
                    <EventCard
                      eventTitle="Sydney Marathon"
                      festivalName="Sydney Marathon"
                      year={2024}
                    />
                    <EventCard
                      eventTitle="Gold Coast Marathon"
                      festivalName="Gold Coast Marathon"
                      year={2024}
                    />
                    <EventCard
                      eventTitle="Brisbane Marathon"
                      festivalName="Brisbane Marathon"
                      year={2024}
                    />
                  </Box>
                </Box>

                {/* Same Festival, Different Time */}
                <Box>
                  <Box display="flex" flexDirection="column" gap={4}>
                    <EventCard
                      eventTitle={festival.name}
                      festivalName={festival.name}
                      year={2023}
                    />
                    <EventCard
                      eventTitle={festival.name}
                      festivalName={festival.name}
                      year={2022}
                    />
                    <EventCard
                      eventTitle={festival.name}
                      festivalName={festival.name}
                      year={2021}
                    />
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
        </Container>

        <Footer />
      </Box>
    </Box>
  );
}

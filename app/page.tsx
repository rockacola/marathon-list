import { Marathon } from '@/types/marathon';
import MarathonCard from '@/components/MarathonCard';
import marathonData from '@/data/marathons.json';
import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react';

export default function Home() {
  const marathons: Marathon[] = marathonData;

  return (
    <Box minH="100vh" p={8} bg="gray.50">
      <Container maxW="container.xl">
        <Box as="header" mb={8}>
          <Heading as="h1" size="2xl" mb={2}>
            Marathon List
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Discover marathons from around the world
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {marathons.map((marathon) => (
            <MarathonCard key={marathon.id} marathon={marathon} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

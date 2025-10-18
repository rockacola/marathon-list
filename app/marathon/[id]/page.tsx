import { Marathon } from '@/types/marathon';
import marathonData from '@/data/marathons.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Link as ChakraLink,
  Separator,
} from '@chakra-ui/react';

// This function tells Next.js which dynamic routes to generate at build time
export async function generateStaticParams() {
  const marathons: Marathon[] = marathonData;
  return marathons.map((marathon) => ({
    id: marathon.id,
  }));
}

export default async function MarathonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const marathons: Marathon[] = marathonData;
  const marathon = marathons.find((m) => m.id === id);

  if (!marathon) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box minH="100vh" p={8} bg="gray.50">
      <Container maxW="container.lg">
        <ChakraLink
          as={Link}
          href="/"
          color="blue.600"
          _hover={{ color: 'blue.800' }}
          mb={6}
          display="inline-block"
        >
          ← Back to all marathons
        </ChakraLink>

        <Box as="article" bg="white" borderRadius="lg" boxShadow="lg" p={8}>
          <Heading as="h1" size="2xl" mb={4}>
            {marathon.name}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={8}>
            <VStack align="stretch" gap={2}>
              <Heading as="h2" size="md" color="gray.700">
                Location
              </Heading>
              <Text>{marathon.location}</Text>
            </VStack>

            <VStack align="stretch" gap={2}>
              <Heading as="h2" size="md" color="gray.700">
                Date
              </Heading>
              <Text>{formatDate(marathon.date)}</Text>
            </VStack>

            <VStack align="stretch" gap={2}>
              <Heading as="h2" size="md" color="gray.700">
                Distance
              </Heading>
              <Text>{marathon.distance}</Text>
            </VStack>

            {marathon.website && (
              <VStack align="stretch" gap={2}>
                <Heading as="h2" size="md" color="gray.700">
                  Official Website
                </Heading>
                <ChakraLink
                  href={marathon.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue.600"
                  _hover={{ color: 'blue.800' }}
                >
                  Visit official site →
                </ChakraLink>
              </VStack>
            )}
          </SimpleGrid>

          <Separator mb={6} />

          <VStack align="stretch" gap={4}>
            <Heading as="h2" size="lg">
              About this Marathon
            </Heading>
            <Text lineHeight="tall">{marathon.description}</Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

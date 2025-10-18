'use client';

import { Marathon } from '@/types/marathon';
import Link from 'next/link';
import { Box, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react';

interface MarathonCardProps {
  marathon: Marathon;
}

export default function MarathonCard({ marathon }: MarathonCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={6}
      _hover={{ boxShadow: 'lg' }}
      transition="box-shadow 0.2s"
    >
      <Heading as="h2" size="lg" mb={2}>
        {marathon.name}
      </Heading>
      <VStack align="stretch" gap={2} mb={4}>
        <Text color="gray.600">
          <Text as="span" fontWeight="semibold">
            Location:
          </Text>{' '}
          {marathon.location}
        </Text>
        <Text color="gray.600">
          <Text as="span" fontWeight="semibold">
            Date:
          </Text>{' '}
          {formatDate(marathon.date)}
        </Text>
        <Text color="gray.600">
          <Text as="span" fontWeight="semibold">
            Distance:
          </Text>{' '}
          {marathon.distance}
        </Text>
      </VStack>
      <Text color="gray.700" mb={4} lineClamp={3}>
        {marathon.description}
      </Text>
      <Link href={`/marathon/${marathon.id}`}>
        <Button colorScheme="blue" width="full">
          View Details
        </Button>
      </Link>
    </Box>
  );
}

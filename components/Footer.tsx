'use client';

import { Box, Container, Text, Flex } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" py={8} mt="auto">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
          <Text fontSize="sm" color="gray.600">
            © 2025 Marathon List. All rights reserved.
          </Text>
          <Text fontSize="sm" color="gray.600">
            Built with Next.js & Chakra UI
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

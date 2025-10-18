"use client";

import { FEATURE_FLAGS } from "@/config/featureFlags";
import LinkedLogo from "@/components/LinkedLogo";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const EventHeader = () => {
  return (
    <Box as="header" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <LinkedLogo />

          {/* Search - Placeholder */}
          {FEATURE_FLAGS.search && (
            <Box width="240px">
              <Input
                placeholder="Search..."
                bgColor="gray.200"
                border="none"
                borderRadius="full"
                px={6}
              />
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default EventHeader;

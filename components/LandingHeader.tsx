"use client";

import LinkedLogo from "@/components/LinkedLogo";
import { Box, Container, Flex } from "@chakra-ui/react";

const LandingHeader = () => {
  return (
    <Box as="header" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <LinkedLogo />
        </Flex>
      </Container>
    </Box>
  );
};

export default LandingHeader;

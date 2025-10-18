"use client";

import { Box, Container, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" py={8} mt="auto">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
          <Text fontSize="sm" color="gray.600">
            &copy; {currentYear} Marathon List.
          </Text>
          <Text fontSize="sm" color="gray.600">
            Built with 🏃 & ☕
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

"use client";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function HeaderSimple() {
  return (
    <Box as="header" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href="/">
            <Text
              fontSize="14px"
              fontWeight={500}
              textTransform="uppercase"
              cursor="pointer"
              _hover={{ color: "blue.600" }}
            >
              Marathon List
            </Text>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

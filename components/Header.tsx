"use client";

import { Box, Container, Flex, Text, Group } from "@chakra-ui/react";
import { InputElement, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import Link from "next/link";

export default function Header() {
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

          {/* Search - Placeholder */}
          <Box width="240px">
            <Input
              placeholder="Search..."
              bgColor="gray.200"
              border="none"
              borderRadius="full"
              px={6}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

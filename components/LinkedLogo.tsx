"use client";

import { Text } from "@chakra-ui/react";
import Link from "next/link";

const LinkedLogo = () => {
  return (
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
  );
};

export default LinkedLogo;

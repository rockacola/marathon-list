import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface InfoCardTitleProps {
  children: ReactNode;
}

const InfoCardTitle = ({ children }: InfoCardTitleProps) => {
  return (
    <Text fontSize="12px" fontWeight={500} mb={1}>
      {children}
    </Text>
  );
};

export default InfoCardTitle;

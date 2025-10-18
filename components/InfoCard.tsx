import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface InfoCardProps {
  children: ReactNode;
}

const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <Box
      bgColor="white"
      borderRadius="2xl"
      p={4}
      boxShadow="0 10px 30px rgba(0, 0, 0, 0.08)"
    >
      {children}
    </Box>
  );
};

export default InfoCard;

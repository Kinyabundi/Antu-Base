import { Box, Image, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { TbChevronRight } from "react-icons/tb";

interface ServiceCardProps {
  imagePath: string;
  title: string;
  description?: string;
}

export default function Services() {
  return (
    <Box py={8} px={{
      base: "12",
      md: "28",
    }} fontFamily={"Inconsolata"}>
      <Text fontWeight={"bold"} fontSize={{
        base: "45px",
        md: "55px",
      }}>
        Reliable end-to-end verification services
      </Text>
      <Text fontSize={"2xl"} pt={3} color={"#969696"}>
        We provide a variety of Identity Verification and Screening. Securing
        encrypted on our Pan-African blockchain service.
      </Text>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
        }}
        rowGap={12}
        columnGap={8}
        my={8}
      >
        <ServiceCard
          imagePath="/images/icons/id.png"
          title="Identity Verification"
        />
        <ServiceCard
          imagePath="/images/icons/facial.png"
          title="Facial Verification"
        />
        <ServiceCard imagePath="/images/icons/kyc.png" title="Blockchain KYC" />
        <ServiceCard
          imagePath="/images/icons/phone.png"
          title="Phone Verification"
        />
        <ServiceCard imagePath="/images/icons/kyc.png" title="Secure OTP" />
      </SimpleGrid>
    </Box>
  );
}

const ServiceCard = ({ imagePath, title, description }: ServiceCardProps) => {
  return (
    <Box px={10} py={8} bg={"white"} boxShadow={"lg"} borderRadius={"xl"}>
      <Box boxSize={"40px"}>
        <Image src={imagePath} alt="Identity" />
      </Box>
      <Text fontWeight={"bold"} fontSize={"2xl"} pt={3}>
        {title}
      </Text>
      <Text fontSize={"lg"} color={"gray.500"} py={5}>
        {description ??
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem rem consequatur exercitationem pariatur a facere id ullam eos labore dicta molestias obcaecati minima tempora, nesciunt voluptatibus, sit"}
      </Text>
      <Button
        rightIcon={<TbChevronRight />}
        mt={7}
        variant={"link"}
        color={"black"}
        size={"lg"}
        fontSize={"24px"}
      >
        <Text fontSize={"xl"}>Learn More</Text>
      </Button>
    </Box>
  );
};

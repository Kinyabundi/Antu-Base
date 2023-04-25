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
          description="Identity Verification is a digital identity verification method used to check whether an applicant’s ID document (e.g. passport, ID card, driver’s license, etc.) is legitimate."
        />
        <ServiceCard
          imagePath="/images/icons/facial.png"
          title="Facial Verification"
          description="Facial Verification is the process of using a photograph or captured selfie to cross-check and verify identity, AntuBase's Biometric Verification Solution offers the highest degree of real-time risk mitigation for businesses engaging with clients in a digital or face-to-face environment.
         "
        />
        <ServiceCard imagePath="/images/icons/kyc.png" title="Blockchain KYC" 
        description="e-KYC is when approved entities query a national ID system to authenticate or verify customers’ identities and, in some cases, retrieve basic attributes about them. e-KYC is a process that is used to verify the identity of a customer and to ensure that the customer is who they claim to be. "
        />
        <ServiceCard
          imagePath="/images/icons/phone.png"
          title="Phone Verification"
          description="Phone verification is the process of validating your mobile number to know whether it is in service or in a working condition or not. It is a mandatory process in most of the applications for security purposes."
        />
        <ServiceCard imagePath="/images/icons/kyc.png" title="Secure OTP" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, nisl a lacinia lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl a nisl."
         />
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
        {description}
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

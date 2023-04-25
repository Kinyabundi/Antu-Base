import {
  SimpleGrid,
  Box,
  Heading,
  Flex,
  Circle,
  HStack,
  Icon,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbChevronRight } from "react-icons/tb";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      mt={16}
      justify={{
        base: "center",
        md: "space-between",
      }}
      align={"center"}
      fontFamily={"Inconsolata"}
    >
      <Box>
        <Heading
          color={"white"}
          fontSize={{
            base: "3xl",
            md: "60px",
          }}
          fontWeight={"bold"}
          fontFamily={"Inconsolata"}
        >
          Identity Verification for People and Businesses in Africa
        </Heading>
        <SimpleGrid columns={2} pt={16} pb={8} gap={8}>
          <HStack spacing={4}>
            <Circle size={"40px"} bg={"purple"}>
              <Icon as={FaUserAlt} color={"white"} />
            </Circle>
            <Text color={"white"} fontSize={"20px"}>
              Customer Onboarding
            </Text>
          </HStack>
          <HStack spacing={4}>
            <Circle size={"40px"} bg={"purple"}>
              <Icon as={BsEmojiSmile} color={"white"} />
            </Circle>
            <Text color={"white"} fontSize={"20px"}>
              Liveness Detection
            </Text>
          </HStack>
          <HStack spacing={4}>
            <Circle size={"40px"} bg={"purple"}>
              <Text color={"white"} fontWeight={"bold"}>
                API
              </Text>
            </Circle>
            <Text color={"white"} fontSize={"20px"}>
              Verification API
            </Text>
          </HStack>
          <HStack spacing={4}>
            <Circle size={"40px"} bg={"purple"}>
              <Icon as={HiOutlineBuildingOffice2} color={"white"} />
            </Circle>
            <Text color={"white"} fontSize={"20px"}>
              Know Your Business
            </Text>
          </HStack>
        </SimpleGrid>
        <Button
          size={"lg"}
          bg={"gray.900"}
          _hover={{
            bg: "gray.800",
          }}
          color={"white"}
          rightIcon={<TbChevronRight />}
        >
          Get a Demo
        </Button>
      </Box>
      <Image
        src="/images/hero2.png"
        alt=""
        display={{
          base: "none",
          md: "block",
        }}
      />
      {/* <Circle
        size={"560"}
        bg={
          "linear-gradient(100.4deg, #3DDEED -2.36%, rgba(61, 222, 237, 0.87) -0.61%, rgba(61, 222, 237, 0.69) 1.14%, rgba(61, 222, 237, 0.52) 3.75%, rgba(61, 222, 237, 0.38) 6.37%, rgba(61, 222, 237, 0.26) 8.99%, rgba(61, 222, 237, 0.17) 11.61%, rgba(61, 222, 237, 0.09) 15.1%, rgba(61, 222, 237, 0.04) 19.47%, rgba(61, 222, 237, 0.01) 25.58%, rgba(61, 222, 237, 0) 39.55%, rgba(61, 222, 237, 0.07) 63.99%, rgba(61, 222, 237, 0.1) 71.85%, rgba(227, 164, 174, 0.1) 83.2%)"
        }
        border={"none"}
      /> */}
    </Flex>
  );
}

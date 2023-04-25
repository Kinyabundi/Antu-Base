import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import {
  Box,
  Heading,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  chakra,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";

export default function Documentation() {
  return (
    <>
      <Box position={"relative"} pt={"8"} pb={"24"} px={{
        base: "12px",
        md: "28px",
      }}>
        <Box
          position={"absolute"}
          top={"0"}
          left={"0"}
          right={"0"}
          bottom={"0"}
          bg={"linear-gradient(180deg, #8916BF 0%, #4E0E6B 100%)"}
          h={"300"}
          w={"100%"}
          zIndex={"-10"}
        ></Box>
        <Navbar />
        <Divider />
        <Flex
          mt={2}
          w={"full"}
          justify={"center"}
          align={"center"}
          flexDir={"column"}
          color={"white"}
        >
          <Heading fontFamily={"Inconsolata"} size={"3xl"}>
            Documentation
          </Heading>
          <Text w={"50%"} textAlign={"center"} mt={5} fontSize={"sm"}>
            Explore our Tutorials, Code Samples, API references, SDKs and other
            resources to help you start building with AntuBase
          </Text>
          <InputGroup w={"60%"} mt={"44px"} bg={"#EFEFEF"} borderRadius={"lg"}>
            <InputLeftElement pointerEvents={"none"}>
              <Icon as={HiOutlineSearch} color={"black"} />
            </InputLeftElement>
            <Input
              placeholder="Search Documentation"
              color={"black"}
              _focus={{
                border: "none",
              }}
            />
          </InputGroup>
        </Flex>
      </Box>
      <Flex align={"center"} w={"full"} flexDir={"column"} my={8} px={12}>
        <Heading fontSize={{
          base: "3xl",
          md: "4xl",
        }} textAlign={"center"} fontWeight={"extrabold"}>
          <chakra.span
            bg={
              "linear-gradient(to right, #14b8a6, #00b3c3, #00aae2, #009ef8, #008afe, #1d85fc, #2d80fa, #397bf7, #0688f7, #0093f4, #009cef, #0ea5e9)"
            }
            bgClip={"text"}
            fill={"transparent"}
          >
            Coming
          </chakra.span>
          <chakra.span
            bg={
              "linear-gradient(to right, #3b82f6, #7a78ee, #a36ce0, #c160cf, #d854b9, #e44ca8, #ec4596, #f24184, #f43e74, #f43e64, #f34054, #ef4444)"
            }
            bgClip={"text"}
            fill={"transparent"}
            ml={2}
          >
            Soon
          </chakra.span>
        </Heading>
        <Text
          mt={6}
          fontSize={"lg"}
          maxW={"3xl"}
          textAlign={"center"}
          color={"gray.700"}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          distinctio molestias aspernatur vero magnam quis nisi delectus dolores
          eveniet inventore?
        </Text>
        <HStack spacing={4} mt={6}>
          <Input placeholder="Your email" size={"lg"} />
          <Button colorScheme="blue" size={"lg"}>
            Notify Me
          </Button>
        </HStack>

        <Text color={"gray.700"} mt={8}>
          Notify me when docs are added
        </Text>
      </Flex>
      <Footer />
    </>
  );
}

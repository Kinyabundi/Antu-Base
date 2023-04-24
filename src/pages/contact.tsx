import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import {
  Box,
  Button,
  Circle,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill, RiTwitterFill } from "react-icons/ri";
import { TbArrowRight } from "react-icons/tb";

export default function Contact() {
  return (
    <>
      <Navbar header={"Contact"} />

      <Box py={12} px={"28"} fontFamily={"Inconsolata"}>
        <iframe
        title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021150.2078797459!2d35.54065927812499!3d-1.2505607999999946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19ad9a1a2ce1%3A0xe96ada7314fbafe2!2sThe%20Andys%20Veterinary%20Clinic%20-%20Loresho!5e0!3m2!1sen!2ske!4v1682259206310!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          my={"100px"}
          gap={4}
        >
          <Box>
            <Text fontSize={"3xl"} fontWeight={"semibold"} color={"#595959"}>
              Get in Touch
            </Text>

            <Text my={5} maxW={"70%"} color={"#595959"}>
              We will be pleased to hear from you with any questions or
              inquiries about our services. If you have any comments or
              suggestions about our website
            </Text>
            <VStack spacing={2} align={"flex-start"}>
              <Text fontSize={"xl"} fontWeight={"semibold"} color={"#595959"}>
                React out to us
              </Text>
              <HStack spacing={2}>
                <Text color={"#595959"}>Phone:</Text>
                <Text color={"#595959"}>+254 712 345 678</Text>
              </HStack>
              <HStack spacing={2}>
                <Text color={"#595959"}>Email:</Text>
                <Text color={"#595959"}>
                  <a href="mailto:sema@antubase.com">sema@antubase.com</a>
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Text color={"#595959"}>Address:</Text>
                <Text color={"#595959"}>Nairobi, Kenya</Text>
              </HStack>
            </VStack>

            <VStack spacing={4} align={"flex-start"} mt={8}>
              <Text fontSize={"lg"} fontWeight={"semibold"} color={"#595959"}>
                Follow us on socials
              </Text>
              <HStack spacing={2}>
                <Circle size={"40px"} bg={"rgba(70, 133, 255, 0.22)"}>
                  <Icon
                    as={BsFacebook}
                    color={"blue"}
                    cursor={"pointer"}
                    w={4}
                    h={4}
                  />
                </Circle>
                <Circle size={"40px"} bg={"rgba(70, 133, 255, 0.22)"}>
                  <Icon
                    as={RiInstagramFill}
                    color={"blue"}
                    cursor={"pointer"}
                    w={4}
                    h={4}
                  />
                </Circle>
                <Circle size={"40px"} bg={"rgba(70, 133, 255, 0.22)"}>
                  <Icon
                    as={RiTwitterFill}
                    color={"blue"}
                    cursor={"pointer"}
                    w={4}
                    h={4}
                  />
                </Circle>
              </HStack>
            </VStack>
          </Box>
          <VStack spacing={5}>
            <Input placeholder="Name" size={"lg"} bg={"#ECECEC"} />
            <Input placeholder="Email" size={"lg"} bg={"#ECECEC"} />
            <Input placeholder="Subject" size={"lg"} bg={"#ECECEC"} />
            <Textarea placeholder="Message" p={6} bg={"#ECECEC"} />
            <Button
              bg={"#1053E3"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              size={"lg"}
              alignSelf={"flex-end"}
              rightIcon={<TbArrowRight />}
              w={"40%"}
              justifyContent={"space-between"}
              borderRadius={"44px"}
            >
              SEND
            </Button>
          </VStack>
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  );
}

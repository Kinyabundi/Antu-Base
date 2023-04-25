import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { TbChevronRight } from "react-icons/tb";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";

export default function Features() {
  return (
    <Box fontFamily={"Inconsolata"}>
      <Box py={8} px={{
        base: "12px",
        md: "28px",
      }}>
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"5xl"}>
          Features
        </Text>
        <Text fontSize={"2xl"} pt={3} color={"#969696"} textAlign={"center"}>
          Instant verifications and background checks
        </Text>

        <Flex
          flexDir={{
            base: "column",
            md: "row",
          }}
          w={"full"}
          justify={"space-evenly"}
          align={"center"}
          mt={8}
        >
          <Fade bottom>
            <Image
              src="/images/onboarding.png"
              alt="Fets"
              w={"400px"}
              h={"400px"}
            />
          </Fade>
          <Box
            w={{
              base: "full",
              md: "50%",
            }}
          >
            <Text fontWeight={"bold"} fontSize={"3xl"} pt={3}>
              Customer Onboarding
            </Text>
            <Text fontSize={"xl"} color={"#969696"} pt={3}>
              Fulfil your AML/KYC compliance requirements using our automated ID
              capture solution when enrolling new users on your service
            </Text>
            <Button
              size={"lg"}
              bg={"#919191"}
              _hover={{
                bg: "gray.600",
              }}
              color={"white"}
              rightIcon={<TbChevronRight />}
              mt={8}
            >
              Get a Demo
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box bg="rgba(0, 81, 255, 0.04)" py={8} px={{
        base: "12px",
        md: "28px",
      }}>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
        >
          <Flex align={"flex-start"} justify={"center"} flexDir={"column"}>
            <Text fontWeight={"bold"} fontSize={"3xl"} pt={3}>
              Liveness Detection
            </Text>
            <Text fontSize={"xl"} color={"#969696"} pt={3}>
              Artifical Intelligence enabled detection to determine if someone
              is physically preset during transaction. Boosts conversion rates
              by 15% with detailed realtime feedback.
            </Text>
            <Button
              size={"lg"}
              bg={"#919191"}
              _hover={{
                bg: "gray.600",
              }}
              color={"white"}
              rightIcon={<TbChevronRight />}
              mt={8}
            >
              Get a Demo
            </Button>
          </Flex>
          <Fade bottom>
            <Image
              src="/images/detection.png"
              alt="Fets"
              w={"400px"}
              h={"400px"}
            />
          </Fade>
        </SimpleGrid>
      </Box>
      <Box py={12} px={{
        base: "12px",
        md: "28px",
      }}>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
        >
          <Fade bottom>
            <Image
              src="/images/verification.png"
              alt="Fets"
              w={"547px"}
              h={"314px"}
            />
          </Fade>
          <Flex align={"flex-start"} justify={"center"} flexDir={"column"}>
            <Text fontWeight={"bold"} fontSize={"3xl"} pt={3}>
              Verification API
            </Text>
            <Text fontSize={"xl"} color={"#969696"} pt={3}>
              Enable real-time Identity Verification and Screening in your
              application by implementing our REST API. Use our mobile and web
              SDKs for user onboarding.
            </Text>
            <Button
              size={"lg"}
              bg={"#919191"}
              _hover={{
                bg: "gray.600",
              }}
              color={"white"}
              rightIcon={<TbChevronRight />}
              mt={8}
            >
              Get a Demo
            </Button>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box bg="rgba(0, 81, 255, 0.04)" py={8} px={{
        base: "12px",
        md: "28px",
      }}>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          columnGap={9}
        >
          <Flex align={"flex-start"} justify={"center"} flexDir={"column"}>
            <Text fontWeight={"bold"} fontSize={"3xl"} pt={3}>
              Know Your Business
            </Text>
            <Text fontSize={"xl"} color={"#969696"} pt={3}>
              Perform due diligence on businesses across Africa to confirm that
              the person you are dealing with is the legitimate owner and that
              the business is a legitimate entity.
            </Text>
            <Button
              size={"lg"}
              bg={"#919191"}
              _hover={{
                bg: "gray.600",
              }}
              color={"white"}
              rightIcon={<TbChevronRight />}
              mt={8}
            >
              Get a Demo
            </Button>
          </Flex>
          <Fade bottom>
            <Image
              src="/images/business.png"
              alt="Fets"
              w={"400px"}
              h={"400px"}
            />
          </Fade>
        </SimpleGrid>
      </Box>
      <Box py={12} px={{
        base: "12px",
        md: "28px",
      }}>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          columnGap={9}
          my={20}
        >
          <Image src="/images/devs.png" alt="Fets" w={"547px"} h={"314px"} />
          <Flex align={"flex-start"} justify={"center"} flexDir={"column"}>
            <Text fontWeight={"bold"} fontSize={"3xl"} pt={3}>
              Developers: Made with you in Mind
            </Text>
            <Text fontSize={"xl"} color={"#969696"} pt={3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias necessitatibus sunt in quo aperiam dicta, accusantium
              temporibus quidem totam repellendus?
            </Text>
            <Button
              size={"lg"}
              bg={"#919191"}
              _hover={{
                bg: "gray.600",
              }}
              color={"white"}
              rightIcon={<TbChevronRight />}
              mt={8}
            >
              Get a Demo
            </Button>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box py={12} px={{
        base: "12px",
        md: "28px",
      }}>
        <Fade bottom>
          <Image src="/images/validation.png" />
        </Fade>
      </Box>
    </Box>
  );
}

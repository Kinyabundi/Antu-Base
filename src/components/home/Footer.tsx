import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Text,
  chakra,
  Center,
  Stack,
} from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill, RiTwitterFill } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import { TbCopyright } from "react-icons/tb";

export default function Footer() {
  return (
    <Box
      fontFamily={"Inconsolata"}
      py={8}
      px={{
        base: "12",
        md: "28",
      }}
      bg={"black"}
      color={"white"}
    >
      <Flex
        flexDir={{
          base: "column",
          md: "row",
        }}
        justify={{
          base: "center",
          md: "space-between",
        }}
        align={{
          base: "center",
          md: "center",
        }}
        w={"full"}
        h={{
          base: "auto",
          md: "100px",
        }}
        my={{
          base: "auto",
          md: "5",
        }}
      >
        <Text fontSize={"40px"}>
          Antu
          <chakra.span fontWeight={"bold"}>Base</chakra.span>
        </Text>
        <Text
          w={"60%"}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          distinctio aliquid ducimus quia suscipit cupiditate dolorum facere
          praesentium rerum expedita.
        </Text>
        <Center
          display={{
            base: "none",
            md: "block",
          }}
          height="50px"
        >
          <Divider orientation="vertical" />
        </Center>
        <HStack
          spacing={3}
          my={{
            base: "5",
            md: "0",
          }}
        >
          <Icon
            as={BsFacebook}
            color={"#10E4B6"}
            w={6}
            h={6}
            cursor={"pointer"}
          />
          <Icon
            as={RiInstagramFill}
            color={"#10E4B6"}
            w={6}
            h={6}
            cursor={"pointer"}
          />
          <Icon
            as={RiTwitterFill}
            color={"#10E4B6"}
            w={6}
            h={6}
            cursor={"pointer"}
          />
        </HStack>
      </Flex>
      <Divider />
      <Flex
        justify={{
          base: "center",
          md: "space-between",
        }}
        align={"center"}
        w={"full"}
        py={4}
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Flex
          align={"center"}
          mb={{
            base: 4,
            md: 0,
          }}
        >
          <Icon as={TbCopyright} w={5} h={5} mr={3} />
          <Text>2023 AntuBase. All rights reserved.</Text>
        </Flex>
        <Stack
          spacing={2}
          direction={{
            base: "column",
            md: "row",
          }}
          align={{
            base: "center",
            md: "center",
          }}
        >
          <Text>Terms of service</Text>
          <Icon as={GoPrimitiveDot} />
          <Text>Privacy Policy</Text>
          <Icon as={GoPrimitiveDot} />
          <Text>Data Policy</Text>
        </Stack>
      </Flex>
    </Box>
  );
}

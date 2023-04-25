import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Partnerships() {
  return (
    <Box py={{
      base: "8px",
      md: "20px",
    }} px={{
      base: "8px",
      md: "28px",
    }} fontFamily={"Inconsolata"} mt={10}>
      <Text textAlign={"center"} fontWeight={"bold"} fontSize={"3xl"}>
        Partnerships
      </Text>
      <Flex
        flexDir={{
          base: "column",
          md: "row",
        }}
        justify={"space-between"}
        align={"center"}
        py={12}
      >
        <Image
          src="/images/oracle.png"
          alt="Oracle"
          my={{
            base: 4,
            md: 0,
          }}
        />
        <Image
          src="/images/elarian.png"
          alt="Oracle"
          my={{
            base: 4,
            md: 0,
          }}
        />
        <Image
          src="/images/hill.png"
          alt="Oracle"
          my={{
            base: 4,
            md: 0,
          }}
        />
        <Image
          src="/images/near.png"
          alt="Oracle"
          my={{
            base: 4,
            md: 0,
          }}
        />
      </Flex>
      <Stack
        spacing={7}
        py={16}
        direction={{
          base: "column",
          md: "row",
        }}
        align={"flex-start"}
      >
        <Text fontWeight={"extrabold"} fontSize={"4xl"}>
          What is AntuBase?
        </Text>
        <VStack spacing={2} align={"flex-start"}>
          <Text fontSize={"xl"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem
            rem consequatur exercitationem pariatur a facere id ullam eos labore
            dicta molestias obcaecati minima tempora, nesciunt voluptatibus, sit
            nihil unde! Minima architecto recusandae facilis natus voluptatibus
            molestiae eligendi accusantium quod.
          </Text>
          <Text fontSize={"2xl"} fontWeight={"semibold"} pt={3}>
            Mission
          </Text>
          <Text fontSize={"xl"} color={"#BFBFBF"}>
            To digitize trust, increasing the value of interactions made in
            day-to-day life.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
}

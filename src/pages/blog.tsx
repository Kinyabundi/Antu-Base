import {
    Box,
    Heading,
    SimpleGrid,
    Image,
    Text,
    VStack,
    HStack,
    Avatar,
    Icon,
  } from "@chakra-ui/react";
  import { GoPrimitiveDot } from "react-icons/go";
  
  export default function Blog() {
    return (
      <Box
        py={8}
        px={{
          base: "4",
          md: "28",
        }}
        fontFamily={"Inconsolata"}
      >
        <Heading
          textAlign={"center"}
          color={"white"}
          fontFamily={"Inconsolata"}
          size={"3xl"}
        >
          Blog
        </Heading>
        <SimpleGrid
          mt={"100px"}
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          columnGap={10}
          rowGap={"100px"}
        >
          {[...Array(6)].map((_, i) => (
            <BlogItem key={i} />
          ))}
        </SimpleGrid>
      </Box>
     
    );
  }
  
  const BlogItem = () => {
    return (
      <Box maxW={"600px"}>
        <Image
          src="/images/blog1.png"
          w={"full"}
          alt=""
          borderRadius={"lg"}
          cursor={"pointer"}
        />
        <VStack spacing={4} align={"flex-start"} mt={5}>
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            Sustainable Verification
          </Text>
          <Text fontSize={"md"} color={"#65635F"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            similique ad non nostrum voluptatum tenetur accusamus officiis quos
            ipsam? Quam.
          </Text>
          <HStack spacing={2}>
            <Avatar
              src="https://s3.r29static.com/bin/entry/081/720x864,85/1862230/image.webp"
              size={"md"}
              name="Olivia Pope"
            />
            <Box>
              <Text fontWeight={"500"}>Olivia Pope</Text>
              <HStack spacing={2}>
                <Text fontSize={"sm"} color={"#65635F"}>
                  Jan 31, 2023
                </Text>
                <Icon as={GoPrimitiveDot} />
                <Text fontSize={"sm"} color={"#65635F"}>
                  3 min read
                </Text>
              </HStack>
            </Box>
          </HStack>
        </VStack>
      </Box>
    );
  };
  
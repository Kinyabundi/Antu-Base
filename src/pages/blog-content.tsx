import {
    Avatar,
    Box,
    HStack,
    Icon,
    Image,
    SimpleGrid,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import Navbar from "../components/Navbar";
  import Footer from "../components/home/Footer";
  import { GoPrimitiveDot } from "react-icons/go";
  
  export default function BlogContent() {
    return (
      <>
        <Navbar header={"Blog"} />
        <Box py={12} px={"28"} fontFamily={"Inconsolata"}>
          <Image src="/images/blog2.png" alt="" />
          <HStack spacing={2} my={"60px"}>
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
          <Text fontSize={"3xl"} fontWeight={"semibold"}>
            How to get started with the blockchain KYC
          </Text>
  
          <Box mt={"30px"} mb={"100px"}>
            <Text w={"90%"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quam
              molestiae est officia corrupti quisquam similique, distinctio ex
              aliquam nulla laborum consectetur dolores rem placeat ducimus,
              laboriosam praesentium voluptatum.
            </Text>
            <Text w={"90%"} mt={8}>
              Nisi odio consequuntur error unde aut, tempora delectus quos
              reiciendis eius sed omnis deserunt? Sequi dolores nam labore. Sed
              aspernatur hic, odio perspiciatis sunt adipisci minus modi laborum
              corporis voluptates dignissimos molestiae reiciendis aut ex
              consequuntur possimus sequi quod sint earum minima enim assumenda
              laboriosam suscipit. Doloremque minima aliquid illo labore sunt
              ipsum accusantium perferendis fugit, distinctio nisi dicta ipsam
              iusto vero aut in rerum numquam neque cupiditate at! Modi eaque
              deserunt quas dolores autem nobis? Nisi ipsa ea vitae error
              repudiandae harum dolor ab rerum. Laborum iusto maiores accusamus
              impedit vero.
            </Text>
          </Box>
          <Box my={"30px"}>
            <Text fontSize={"2xl"} fontWeight={"semibold"} mb={"30px"}>
              Related Articles
            </Text>
            <SimpleGrid
              columns={{
                base: 1,
                md: 3,
              }}
              columnGap={10}
              rowGap={"100px"}
            >
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </SimpleGrid>
          </Box>
        </Box>
        <Footer />
      </>
    );
  }
  
  const BlogItem = () => {
    return (
      <Box maxW={"600px"}>
        <Image src="/images/blog1.png" w={"full"} alt="" borderRadius={"lg"} cursor={"pointer"} />
        <VStack spacing={4} align={"flex-start"} mt={5}>
          <Text fontSize={"xl"} fontWeight={"semibold"} as={"a"}>
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
  
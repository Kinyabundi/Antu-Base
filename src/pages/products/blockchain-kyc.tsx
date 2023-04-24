import { Box, Button, Text, Flex, SimpleGrid, Image, Icon } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import { TbChevronRight } from 'react-icons/tb'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import { HiOutlineIdentification } from 'react-icons/hi';
import PricingCard from '../../components/cards/PricingCard';
import Footer from '../../components/home/Footer';


const BlockChainKYC = () => {
    return (
        <>
            <Navbar
                header="Blockchain KYC"
            />


            <Box py={12} px={"28"} h={"600"} fontFamily={"Inconsolata"}>
                <SimpleGrid columns={{
                    base: 1,
                    md: 2,
                }}>
                    <Fade bottom>
                        <Image
                            src="/images/blockchain-kyc.svg"
                            alt="Fets"
                            w={"547px"}
                            h={"314px"}
                        />
                    </Fade>
                    <Flex align={"flex-start"} justify={"center"} flexDir={"column"}>
                        <Text fontWeight={"bold"} fontSize={"3xl"} pt={3}>
                            Blockchain KYC
                        </Text>
                        <Text fontSize={"xl"} color={"#969696"} pt={3}>
                            e-KYC is when approved entities query a national ID system to authenticate or verify customers’ identities and, in some cases, retrieve basic attributes about them. e-KYC is a process that is used to verify the identity of a customer and to ensure that the customer is who they claim to be.
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
            <Box py={"50"} px={{
                base: "8px",
                md: "28px",
            }}
                bg={"#FAFAFA"} h={{
                    base: "1300px",
                    md: "556px",
                }}
                fontFamily={"Inconsolata"}
                mt={{
                    base: "300px",
                    md: "30px",
                }}
            >
                <Text
                    fontWeight={"700"}
                    fontSize={"36px"}
                    lineHeight={"45px"}
                    color={"#000000"}
                    textAlign={"center"}
                    mb={"60px"}
                    mt={"30px"}
                >
                    Use Cases
                </Text>
                <SimpleGrid columns={{
                    base: 1,
                    md: 3,
                }}
                    spacing={10}
                >
                    <Box
                        bg={"white"}
                        boxShadow={"0px 4.60418px 40.2865px rgba(0, 0, 0, 0.09)"}
                        mx={"50px"}
                        w={"343px"}
                        h={"307px"}
                        borderRadius={"13.81px"}
                    >
                        <Icon as={HiOutlineIdentification} w={8} h={8} color={"#10E4B6"} mt={"20px"} mx={"145px"} />
                        <Text
                            fontWeight={"700"}
                            fontSize={"24px"}
                            lineHeight={"34px"}
                            mt={"10px"}
                            mx={"116px"}
                            color={"#000000"}
                            textAlign={"center"}
                        >Use Case</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"18px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"30px"}
                            color={"#BFBFBF"}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit facere perspiciatis illum. Natus animi vitae ipsam deleniti, maxime voluptates ipsum fuga
                        </Text>
                    </Box>
                    <Box
                        bg={"white"}
                        boxShadow={"0px 4.60418px 40.2865px rgba(0, 0, 0, 0.09)"}
                        mx={"50px"}
                        w={"343px"}
                        h={"307px"}
                        borderRadius={"13.81px"}
                    >
                        <Icon as={HiOutlineIdentification} w={8} h={8} color={"#10E4B6"} mt={"20px"} mx={"145px"} />
                        <Text
                            fontWeight={"700"}
                            fontSize={"24px"}
                            lineHeight={"34px"}
                            mt={"10px"}
                            mx={"116px"}
                            color={"#000000"}
                            textAlign={"center"}
                        >Use Case</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"18px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"30px"}
                            color={"#BFBFBF"}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit facere perspiciatis illum. Natus animi vitae ipsam deleniti, maxime voluptates ipsum fuga
                        </Text>
                    </Box>
                    <Box
                        bg={"white"}
                        boxShadow={"0px 4.60418px 40.2865px rgba(0, 0, 0, 0.09)"}
                        mx={"50px"}
                        w={"343px"}
                        h={"307px"}
                        borderRadius={"13.81px"}
                    >
                        <Icon as={HiOutlineIdentification} w={8} h={8} color={"#10E4B6"} mt={"20px"} mx={"145px"} />
                        <Text
                            fontWeight={"700"}
                            fontSize={"24px"}
                            lineHeight={"34px"}
                            mt={"10px"}
                            mx={"116px"}
                            color={"#000000"}
                            textAlign={"center"}
                        >Use Case</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"18px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"30px"}
                            color={"#BFBFBF"}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit facere perspiciatis illum. Natus animi vitae ipsam deleniti, maxime voluptates ipsum fuga
                        </Text>
                    </Box>

                </SimpleGrid>
            </Box>

            <Box py={163} px={{
                base: "8px",
                md: "28px",
            }} mb={"50px"} mt={{
                base: "100px",
                md: "50px",
            }} mx={{
                base: "50px",
                md: "0px",
            }}
                fontFamily={"Inconsolata"}
            >
                <Text
                    fontWeight={"700"}
                    fontSize={"36px"}
                    lineHeight={"45px"}
                    color={"#000000"}
                    textAlign={"center"}
                    mb={16}
                >
                    Pricing
                </Text>
                <SimpleGrid columns={{
                    base: 1,
                    md: 4,
                }}
                    spacing={10}>
                    <PricingCard
                        cardHeader="National ID(KE)"
                        showtag={false}
                    />
                    <PricingCard
                        cardHeader="Passport(KE)"
                        showtag={false}
                    />
                    <PricingCard
                        cardHeader="Refugee ID(KE)"
                        showtag={true}
                    />
                    <PricingCard
                        cardHeader="Alien ID(KE)"
                        showtag={false}
                    />
                </SimpleGrid>
            </Box>

            <Footer />

        </>
    )
}

export default BlockChainKYC



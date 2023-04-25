import { Box, Button, Text, Flex, SimpleGrid, Image, Icon } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import { TbChevronRight } from 'react-icons/tb'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import { HiOutlineIdentification } from 'react-icons/hi';
import PricingCard from '../../components/cards/PricingCard';
import Footer from '../../components/home/Footer';


const IDVerification = () => {
    return (
        <>
            <Navbar
                header="ID Verification"
            />


            <Box py={12} px={{
                base: "8px",
                md: "28px",
            }} h={"600"}
                fontFamily={"Inconsolata"}>
                <SimpleGrid columns={{
                    base: 1,
                    md: 2,
                }}>
                    <Fade bottom>
                        <Image
                            src="/images/idverification.svg"
                            alt="Fets"
                            w={"547px"}
                            h={"314px"}
                        />
                    </Fade>
                    <Flex align={"flex-start"} justify={"center"} flexDir={"column"}>
                        <Text fontWeight={"bold"} fontSize={"3xl"} pt={3}>
                            ID Verification
                        </Text>
                        <Text fontSize={"xl"} color={"#969696"} pt={3}>
                           Identity Verification is a digital identity verification method used to check whether an applicant’s ID document (e.g. passport, ID card, driver’s license, etc.) is legitimate
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
            <Box py={"30"} px={{
                base: "8px",
                md: "28px",
            }} bg={"#FAFAFA"} h={{
                base: "1300px",
                md: "556px",
            }} fontFamily={"Inconsolata"}
                mt={{
                    base: "300px",
                    md: "30px",
                }}>
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
                }} spacing={10} >
                    <Box
                        bg={"white"}
                        boxShadow={"0px 4.60418px 40.2865px rgba(0, 0, 0, 0.09)"}
                        mx={{
                            base: "25px",
                            md: "50px",
                        }}
                        w={"343px"}
                        h={"325px"}
                        borderRadius={"13.81px"}
                    >
                        <Icon as={HiOutlineIdentification} w={8} h={8} color={"#10E4B6"} mt={"20px"} mx={"145px"} />
                        <Text
                            fontWeight={"700"}
                            fontSize={"20px"}
                            lineHeight={"34px"}
                            mt={"10px"}
                            mx={"100px"}
                            color={"#000000"}
                            textAlign={"center"}
                        >Finance</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"25px"}
                            color={"#BFBFBF"}
                        >
                            Digital onboarding and authentication solution that financial institutions use to meet KYC and AML requirements, while improving user experience and security standards.
                        </Text>
                    </Box>
                    <Box
                        bg={"white"}
                        boxShadow={"0px 4.60418px 40.2865px rgba(0, 0, 0, 0.09)"}
                        mx={{
                            base: "25px",
                            md: "50px",
                        }}
                        w={"343px"}
                        h={"325px"}
                        borderRadius={"13.81px"}
                    >
                        <Icon as={HiOutlineIdentification} w={8} h={8} color={"#10E4B6"} mt={"20px"} mx={"145px"} />
                        <Text
                            fontWeight={"700"}
                            fontSize={"20px"}
                            lineHeight={"34px"}
                            mt={"10px"}
                            mx={"100px"}
                            color={"#000000"}
                            textAlign={"center"}
                        >Mobility</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"25px"}
                            color={"#BFBFBF"}
                        >
                            Digital onboarding and authentication solution that mobility platforms use to verify their drivers documents, while offering a great user experience and ensuring security standards
                        </Text>
                    </Box>
                    <Box
                        bg={"white"}
                        boxShadow={"0px 4.60418px 40.2865px rgba(0, 0, 0, 0.09)"}
                        mx={{
                            base: "25px",
                            md: "50px",
                        }}
                        w={"343px"}
                        h={"325px"}
                        borderRadius={"13.81px"}
                    >
                        <Icon as={HiOutlineIdentification} w={8} h={8} color={"#10E4B6"} mt={"20px"} mx={"145px"} />
                        <Text
                            fontWeight={"700"}
                            fontSize={"20px"}
                            lineHeight={"34px"}
                            mt={"10px"}
                            mx={"100px"}
                            color={"#000000"}
                            textAlign={"center"}
                        >Customer Onboarding</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"25px"}
                            color={"#BFBFBF"}
                        >
                            Consumers expect fast and secure onboarding when opening an account. Avoid the pitfalls of slow, disjointed customer onboarding by leveraging a comprehensive end-to-end identity verification platform that puts speed, security and growth at the forefront of your operations.
                        </Text>
                    </Box>

                </SimpleGrid>
            </Box>

            <Box py={163} px={{
                base: "8px",
                md: "28px",
            }} mb={"50px"} 
            mx={{
                base: "25px",
                md: "50px",
            }}mt={{
                base: "100px",
                md: "50px",
            }}>
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
                }} spacing={10}>
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

export default IDVerification



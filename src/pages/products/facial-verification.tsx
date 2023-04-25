import { Box, Button, Text, Flex, SimpleGrid, Image, Icon } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import { TbChevronRight } from 'react-icons/tb'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import { HiOutlineIdentification } from 'react-icons/hi';
import PricingCard from '../../components/cards/PricingCard';
import Footer from '../../components/home/Footer';


const FacialVerification = () => {
    return (
        <>
            <Navbar
                header="Facial Verification"
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
                            src="/images/facial-verification.svg"
                            alt="Fets"
                            w={"547px"}
                            h={"314px"}
                        />
                    </Fade>
                    <Flex align={"flex-start"} justify={"center"} flexDir={"column"}>
                        <Text fontWeight={"bold"} fontSize={"3xl"} pt={3}>
                            Facial Verification
                        </Text>
                        <Text fontSize={"xl"} color={"#969696"} pt={3}>
                            Facial Verification is the process of using a photograph or captured selfie to cross-check and verify identity, AntuBase's Biometric Verification Solution offers the highest degree of real-time risk mitigation for businesses engaging with clients in a digital or face-to-face environment.
                            The service scans a photograph or captured selfie and transforms facial features into digital biometric information. The information is then used to cross-check the photograph against a provided Identity Document or Passport, thereby confirming or invalidating the individual’s provided identity information.
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
            }}
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
                }} spacing={10}>
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
                        > Law Enforcement</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"25px"}
                            color={"#BFBFBF"}
                        >
                          Law enforcement has been a critical use case for facial recognition since the initial days of the technology’s development. Police have used facial recognition ethically to solve crimes, from identifying shoplifters to tracking dangerous criminals.
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
                        >Access control</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"25px"}
                            color={"#BFBFBF"}
                        >
                            Facial recognition is  used in commercial and residential facilities to grant access to authorized employees, family members, or pre-registered guests – or restrict access to unauthorized persons. Examples include:
                            Smart locks and elevators for residential and commercial facilities.
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
                        >Opening a bank account</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"25px"}
                            color={"#BFBFBF"}
                        >
                            Know Your Customer (KYC) is a regulated global practice in financial services. A customer requests to open a bank account.
                            The bank clerk takes the client’s photo as part of the account registration and eKYC process, then scans the client’s government-issued ID.
                            Biometric verification is performed using facial recognition technology.
                        </Text>
                    </Box>

                </SimpleGrid>
            </Box>

            <Box py={163} px={{
                base: "8px",
                md: "28px",
            }} mb={"50px"}
                mt={{
                    base: "100px",
                    md: "50px",
                }} mx={{
                    base: "25px",
                    md: "50px",
                }}
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

export default FacialVerification



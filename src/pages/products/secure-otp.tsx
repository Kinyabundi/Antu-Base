import { Box, Button, Text, Flex, SimpleGrid, Image, Icon } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import { TbChevronRight } from 'react-icons/tb'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import { HiOutlineIdentification } from 'react-icons/hi';
import PricingCard from '../../components/cards/PricingCard';
import Footer from '../../components/home/Footer';


const SecureOTP = () => {
    return (
        <>
            <Navbar
                header="Secure OTP"
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
                            src="/images/blockchain-kyc.svg"
                            alt="Fets"
                            w={"547px"}
                            h={"314px"}
                        />
                    </Fade>
                    <Flex align={"flex-start"} justify={"center"} flexDir={"column"}>
                        <Text fontWeight={"bold"} fontSize={"3xl"} pt={3}>
                            Secure OTP
                        </Text>
                        <Text fontSize={"xl"} color={"#969696"} pt={3}>
                        One-time password (OTP) systems provide a mechanism for logging on to a network or service using a unique password that can only be used once, as the name suggests.
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
                    md: "50px",
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
                }} spacing={10}
                >
                    <Box
                        bg={"white"}
                        boxShadow={"0px 4.60418px 40.2865px rgba(0, 0, 0, 0.09)"}
                        mx={{
                            base: "25px",
                            md: "50px",
                        }}
                        w={"343px"}
                        h={"307px"}
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
                        >Mobile Authentication</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"25px"}
                            color={"#BFBFBF"}
                        >
                            Protect your customers from digital fraud
                            and identity theft.
                            Safeguard your customers’ transactions in a compliant and user-friendly way, using true out-of-band, OTP authentication.
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
                        h={"307px"}
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
                        >Authentication of online payment transactions</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"25px"}
                            color={"#BFBFBF"}
                        >
                        Banks and the credit/debit card providers usually use OTP SMSes to authenticate payment transactions.
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
                        h={"307px"}
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
                        >MNO Authentication</Text>
                        <Text
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            fontSize={"16px"}
                            textAlign={"center"}
                            mt={"7px"}
                            mx={"25px"}
                            color={"#BFBFBF"}
                        >
                           Eliminate the risk of SIM-based fraud and related attacks. Upgrade from traditional SMS one-time PINs (OTPs) to MNO Authentication, an intuitive and reliable mobile-network–based solution that securely authenticates your customers on any mobile device.
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
                base: "25px",
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

export default SecureOTP



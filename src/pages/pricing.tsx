import Navbar from "../components/Navbar"
import { Box, Button, chakra, Image, VStack, Stack } from "@chakra-ui/react"
import PricingCard from "../components/cards/PricingCard"
import Footer from "../components/home/Footer"
const pricing = () => {
    return (
        <>
            <Navbar
                header="Pricing"
            />

            <Stack direction={{
                base: "column",
                md: "row",
            }} spacing={'24px'} alignItems={"center"} mt={"134px"} mx={"102px"} mb={"150px"}
                fontFamily={"Inconsolata"}>
                <VStack >
                    <Box
                        mb={"70px"}
                    >
                        <Button
                            w={284}
                            h={91}
                            boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                            bg={"white"}
                            _focus={{
                                bg: "#1053E3",
                            }}
                        >
                            {/* <Icon as={HiOutlineIdentification} w={8} h={8} color={"#10E4B6"} />
                             */}
                            <Image
                                src="/images/icons/id.png"
                                alt="Fets"

                            />
                            <chakra.span mx={6} color={"black"}>
                                ID verification
                            </chakra.span>
                        </Button>
                    </Box>
                    <PricingCard
                        cardHeader="National ID(KE)"
                        showtag={false}
                    />
                </VStack>
                <VStack >
                    <Box
                        mb={"70px"}
                    >
                        <Button
                            w={284}
                            h={91}
                            boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                            bg={"white"}
                            _focus={{
                                bg: "#1053E3",
                            }}
                        >
                            {/* <Icon as={BsPhone} w={8} h={8} color={"#10E4B6"} /> */}
                            <Image
                                src="/images/icons/phone.png"
                                alt="Fets"

                            />
                            <chakra.span mx={6} color={"black"}>
                                Phone verification
                            </chakra.span>
                        </Button>
                    </Box>
                    <PricingCard
                        cardHeader="Passport(KE)"
                        showtag={false}
                    />
                </VStack>
                <VStack>
                    <Box
                        mb={"70px"}
                    >
                        <Button
                            w={284}
                            h={91}
                            boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                            bg={"white"}
                            _focus={{
                                bg: "#1053E3",
                            }}
                        >
                            {/* <Icon as={MdFace} w={8} h={8} color={"#10E4B6"} />
                             */}
                            <Image
                                src="/images/icons/facial.png"
                                alt="Fets"

                            />
                            <chakra.span mx={6} color={"black"}>
                                Facial verification
                            </chakra.span>
                        </Button>
                    </Box>
                    <Box

                    >
                        <PricingCard
                            cardHeader="Refugee ID(KE)"
                            showtag={true}
                        />
                    </Box>
                </ VStack>
                <VStack>
                    <Box
                        mb={"70px"}
                    >
                        <Button
                            w={284}
                            h={91}
                            boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                            bg={"white"}
                            _focus={{
                                bg: "#1053E3",
                            }}
                        >
                            {/* <Icon as={SiHiveBlockchain} w={8} h={8} color={"#10E4B6"} />
                             */}
                            <Image
                                src="/images/icons/kyc.png"
                                alt="Fets"

                            />
                            <chakra.span mx={6} color={"black"}>
                                BlockChain KYC
                            </chakra.span>
                        </Button>
                    </Box>
                    <PricingCard
                        cardHeader="Alien ID(KE)"
                        showtag={false}
                    />
                </VStack>
            </Stack>

            <Footer />
        </>
    )
}

export default pricing

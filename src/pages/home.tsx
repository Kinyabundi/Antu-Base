import Partnerships from "../components/home/Partnerships";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import { Box, Divider } from "@chakra-ui/react";
import Services from "../components/home/Services";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <Box position={"relative"} pt={"8"} pb={"24"} px={"28"}>
        <Box
          position={"absolute"}
          top={"0"}
          left={"0"}
          right={"0"}
          bottom={"0"}
          bg={"linear-gradient(180deg, #8916BF 0%, #4E0E6B 100%)"}
          h={"800px"}
          w={"100%"}
          borderBottomRightRadius={"157px"}
          zIndex={"-10"}
        ></Box>
        <Navbar />
        <Divider />
        <Hero />
      </Box>
      <Partnerships />
      <Services />
      <Features />
      <Footer />
    </>
  );
}

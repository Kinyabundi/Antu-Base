import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import { Box, Divider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
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
          h={"220"}
          w={"100%"}
          zIndex={"-10"}
        ></Box>
        <Navbar />
        <Divider />
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

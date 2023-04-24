import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import MainLayout from "./layouts/MainLayout";
import IDVerification from "./pages/products/id-verification";
import PhoneVerification from "./pages/products/phone-verification";
import FacialVerification from "./pages/products/facial-verification";
import Blog from "./pages/blog";
import Documentation from "./pages/documentation";
import BlockChainKYC from "./pages/products/blockchain-kyc";
import SecureOTP from "./pages/products/secure-otp";
import Contact from "./pages/contact";
import BlogContent from "./pages/blog-content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pricing",
    element: <Pricing />,
  },
  {
    path: "id-verification",
    element: <IDVerification />,
  },
  {
    path: "phone-verification",
    element: <PhoneVerification />,
  },
  {
    path: "facial-verification",
    element: <FacialVerification />,
  },
  {
    path: "blockchain-kyc",
    element: <BlockChainKYC />,
  },
  {
    path: "secure-otp",
    element: <SecureOTP />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "docs",
    element: <Documentation />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "blog-content",
    element: <BlogContent />,
  },
]);

export default router;

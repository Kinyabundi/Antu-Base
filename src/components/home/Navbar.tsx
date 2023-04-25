import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  chakra,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const mobileNav = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex
      py={2}
      zIndex={"10"}
      w={"full"}
      justify={"space-between"}
      align={"center"}
      fontFamily={"Inconsolata"}
      color={"white"}
    >
      <Text color={"white"} fontSize={"40px"}>
        Antu
        <chakra.span fontWeight={"bold"}>Base</chakra.span>
      </Text>
      <Box display={{ md: "none" }}>
        <IconButton
          display={{
            base: "flex",
            md: "none",
          }}
          aria-label="Open menu"
          fontSize="20px"
          color="gray.800"
          variant="ghost"
          icon={<AiOutlineMenu />}
          onClick={mobileNav.onOpen}
        />
        <VStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          display={mobileNav.isOpen ? "flex" : "none"}
          flexDirection="column"
          p={2}
          pb={4}
          m={2}
          bg={bg}
          spacing={3}
          rounded="sm"
          shadow="sm"
        >
          <CloseButton
            aria-label="Close menu"
            justifySelf="self-start"
            onClick={mobileNav.onClose}
          />
          <Button
            variant={"link"}
            color={{
              base: "black",
              md: "white",
            }}
            as={"a"}
            href={"/"}
          >
            Home
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              variant={"link"}
              color={{
                base: "black",
                md: "white",
              }}
            >
              Products
            </MenuButton>
            <MenuList>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="/id-verification"
              >
                ID Verification
              </MenuItem>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="/phone-verification"
              >
                Phone Verification
              </MenuItem>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="facial-verification"
              >
                Facial Verification
              </MenuItem>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="/blockchain-kyc"
              >
                Blockchain KYC
              </MenuItem>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="/secure-otp"
              >
                Secure OTP
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            variant={"link"}
            color={{
              base: "black",
              md: "white",
            }}
            as={"a"}
            href="/pricing"
          >
            Pricing
          </Button>
          <Button
            variant={"link"}
            color={{
              base: "black",
              md: "white",
            }}
            as={"a"}
            href="/blog"
          >
            Blog
          </Button>
          <Button
            variant={"link"}
            color={{
              base: "black",
              md: "white",
            }}
            as={"a"}
            href="/docs"
          >
            Documentation
          </Button>
          <Button
            variant={"link"}
            color={{
              base: "black",
              md: "white",
            }}
            as={"a"}
            href="/contact"
          >
            Contact
          </Button>
          <Button colorScheme="green">Sign in</Button>
        </VStack>
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <HStack spacing={6} color={"white"} fontSize={"lg"}>
          <Button variant={"link"} color={"white"} as={"a"} href="/">
            Home
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              variant={"link"}
              color={"white"}
            >
              Products
            </MenuButton>
            <MenuList>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="/id-verification"
              >
                ID Verification
              </MenuItem>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="/phone-verification"
              >
                Phone Verification
              </MenuItem>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="/facial-verification"
              >
                Facial Verification
              </MenuItem>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="/blockchain-kyc"
              >
                Blockchain KYC
              </MenuItem>
              <MenuItem
                color={"black"}
                fontSize={"sm"}
                as={"a"}
                href="/secure-otp"
              >
                Secure OTP
              </MenuItem>
            </MenuList>
          </Menu>
          <Button variant={"link"} color={"white"} as={"a"} href="/pricing">
            Pricing
          </Button>
          <Button variant={"link"} color={"white"} as={"a"} href="/blog">
            Blog
          </Button>
          <Button variant={"link"} color={"white"} as={"a"} href="/docs">
            Documentation
          </Button>
          <Button variant={"link"} color={"white"} as={"a"} href="/contact">
            Contact
          </Button>
          <Button colorScheme="green">Sign in</Button>
        </HStack>
      </Box>
    </Flex>
  );
}

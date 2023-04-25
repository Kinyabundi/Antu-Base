import {
  useColorModeValue,
  Box,
  Flex,
  Text,
  chakra,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  IconButton,
  CloseButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {
  header: string;
}

const Navbar = ({ header }: NavbarProps) => {
  const mobileNav = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
      bg={"linear-gradient(180deg, #8916BF 0%, #4D1069 100%)"}
      height={200}
      fontFamily={"Inconsolata"}
    >
      <Box px={{
        base: "8",
        md: "28",
      }} py={4}>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontWeight={400} fontSize={"34px"} lineHeight={"41px"}>
            <chakra.span
              color={useColorModeValue("white", "white.800")}
              fontWeight={"300"}
            >
              Antu
            </chakra.span>
            <chakra.span
              color={useColorModeValue("white", "white.800")}
              fontWeight={"700"}
            >
              Base
            </chakra.span>
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
        <Divider
          display={{
            base: "none",
            md: "block",
          }}
          py={2}
          px={5}
        />
      </Box>

      <Box>
        <Text
          fontWeight={{
            base: "650",
            md: "700",
          }}
          fontSize={{
            base: "40px",
            md: "55px",
          }}
          mt={10}
          lineHeight={"70px"}
          textAlign={"center"}
          color={useColorModeValue("white", "white.800")}
        >
          {header}
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;

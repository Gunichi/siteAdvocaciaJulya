import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header(){
  const bg = useColorModeValue("red", "red.800");

  return (
    <chakra.header>
      <Box
        w="full"
        h="container.sm"
        backgroundImage="url(https://i.imgur.com/wSFyfzP.png)"
        bgPos="center"
        bgSize="cover"
      >
        <chakra.nav bg={''}>
          <Box mx="auto" px={6} py={3} maxW="full">
            <Box
              display={{ md: "flex" }}
              alignItems={{ md: "center" }}
              justifyContent={{ md: "space-between" }}
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Box fontSize="xl" fontWeight="semibold" color="red.700">
                  <chakra.a
                    fontSize={["xl", , "2xl"]}
                    fontWeight="bold"
                    color="gray.800"
                    _dark={{ color: "white" }}
                    _hover={{
                      color: "gray.700",
                      _dark: { color: "gray.300" },
                    }}
                  >
                    Brand
                  </chakra.a>
                </Box>

                <Flex display={{ md: "none" }}>
                  <IconButton
                    aria-label="toggle menu"
                    icon={<AiOutlineMenu />}
                    variant="ghost"
                  />
                </Flex>
              </Flex>

              <Box display={["none", , "flex"]} alignItems={{ md: "center" }}>
                <chakra.a
                  display="block"
                  mx={4}
                  mt={[2, , 0]}
                  fontSize="sm"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                  textTransform="capitalize"
                  _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
                >
                  Web developers
                </chakra.a>
                <chakra.a
                  display="block"
                  mx={4}
                  mt={[2, , 0]}
                  fontSize="sm"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                  textTransform="capitalize"
                  _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
                >
                  Web Designers
                </chakra.a>
                <chakra.a
                  display="block"
                  mx={4}
                  mt={[2, , 0]}
                  fontSize="sm"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                  textTransform="capitalize"
                  _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
                >
                  UI/UX Designers
                </chakra.a>
                <chakra.a
                  display="block"
                  mx={4}
                  mt={[2, , 0]}
                  fontSize="sm"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                  textTransform="capitalize"
                  _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
                >
                  Contact
                </chakra.a>
              </Box>
            </Box>
          </Box>
        </chakra.nav>
        <Flex
          align="center"
          pos="relative"
          justify="left"
          boxSize="full"
          px={[4, 4, 8]}
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["4xl", , "5xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              ADVOCACIA <br /> PREVIDENCIÁRIA
            </Heading>       
            <chakra.p
              fontSize={["sm", , "md"]}
              color="white"
              textTransform="uppercase"
            >
              Precisa de ajuda para entender <br />
              quais benefícios do INSS você tem direito?
            </chakra.p>
            <Button
              colorScheme="whatsapp"
              textTransform="uppercase"
              w="fit-content"
            >
              Fale comigo pelo WhatsApp
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};


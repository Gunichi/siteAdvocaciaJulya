import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Button,
  Stack,
  Text
} from "@chakra-ui/react";
import '@fontsource/belleza'

export default function Header() {
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
        <chakra.nav bg={'blackAlpha.800'}>
          <Box mx="auto" px={6} py={3} maxW="full">
            <Box
              display={{ md: "flex" }}
              alignItems={{ md: "center" }}
              justifyContent={{ md: "flex-start" }}
            >
              {/* <Flex alignItems="center" justifyContent="space-between">
                <Box fontSize="xl" fontWeight="semibold" color="red.700">
                  <chakra.a
                    fontSize={["xl", "xl", "2xl"]}
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
              </Flex> */}
              <Box fontSize="xl" fontWeight="semibold" color="red.700" display={{ base: "none", md: "flex" }} ml={10}>
                <chakra.a
                  fontSize={["xl", "xl", "2xl"]}
                  color="yellow.500"
                  cursor="pointer"
                  _hover={{
                    color: "white",
                    textDecoration: "underline",
                  }}
                  fontFamily={'Belleza'}
                >
                  Inicio
                </chakra.a>
                <chakra.a
                  ml={[4, 4, 6]}
                  fontSize={["xl", "xl", "2xl"]}
                  color="yellow.500"
                  _dark={{ color: "white" }}
                  cursor="pointer"
                  _hover={{
                    color: "white",
                    textDecoration: "underline",
                  }}
                  fontFamily={'Belleza'}
                >
                  Nossas soluções
                </chakra.a>
                <chakra.a
                  fontSize={["xl", "xl", "2xl"]}
                  ml={[4, 4, 6]}
                  color="yellow.500"
                  cursor="pointer"
                  _hover={{
                    color: "white",
                    textDecoration: "underline",
                  }}
                  fontFamily={'Belleza'}
                >
                  Contato
                </chakra.a>

              </Box>
            </Box>
          </Box>
        </chakra.nav>
        <Flex
          align="center"
          justify="left"
          boxSize="full"
          px={[4, 4, 8]}
          bg='blackAlpha.800'
        >
          <Stack alignItems="center" spacing={6}>
            <Heading
              fontSize={["4xl", "3xl", "5xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
              fontFamily={'Belleza'}
            >
              ADVOCACIA <br /> PREVIDENCIÁRIA
            </Heading>
            <Text
              fontSize={["sm", "sm", "md"]}
              color="white"
              textTransform="uppercase"
              fontFamily={'Belleza'}
              fontWeight="bold"
            >
              Precisa de ajuda para entender <br />
              quais benefícios do INSS você tem direito?
            </Text>
            <Button
              colorScheme="whatsapp"
              textTransform="uppercase"
              w="fit-content"
              fontFamily={'Belleza'}
            >
              Fale comigo pelo WhatsApp
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};


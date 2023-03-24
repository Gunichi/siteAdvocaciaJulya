import React from "react";
import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  chakra,
  Stack,
  GridItem,
  Button
} from "@chakra-ui/react";
import { types } from "@/utils/types";
import '@fontsource/belleza'

const Details = () => {
  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="brand.500"
            _dark={{
              color: "brand.300",
            }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            _light={{
              color: "gray.900",
            }}
            fontFamily="Belleza"
            textShadow="1px 1px 2px #00000042"
          >
            {props.title}
          </chakra.dt>
          <chakra.dd
            mt={2}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
            fontFamily="Belleza"
          >
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex
      bg="gray.50"
      _dark={{
        bg: "#3e3e3e",
      }}
      
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="#F9FAFB"
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            lg: 2,
          }}
          spacingY={{
            base: 10,
            lg: 32,
          }}
          spacingX={{
            base: 10,
            lg: 24,
          }}
        >
          
          <GridItem colSpan={3}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(3,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}
            >
              <Feature title={types.Details.atendimento}>
                {types.Details.descricaoAtendimento}
              </Feature>
              <Feature title={types.Details.profissionals}>
                {types.Details.descricaoProfissionals}
              </Feature>
              <Feature title={types.Details.atendimentoHumanizado}>
                {" "}
                {types.Details.descricaoAtendimentoHumanizado}
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
        <Flex justifyContent="center" alignItems="center" mt={10}>
          <Button colorScheme="whatsapp" size="lg" px={10} fontFamily="Belleza">
            Entre em contato pelo WhatsApp
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Details;
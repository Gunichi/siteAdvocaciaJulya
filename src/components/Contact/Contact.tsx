import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  SimpleGrid,
  CheckboxGroup,
  Checkbox,
  Stack,
} from '@chakra-ui/react';
import { types } from '@/utils/types';
import '@fontsource/belleza'

export default function Contact() {
  return (
    <Container bg="gray.50" maxW="full" mt={0} centerContent overflow="hidden">
      <Box w="full" h="full" bg="gray.50" p={10}>
        <Box px={[4, 4, 0]} w="full" h="full" p={10} borderRadius="lg">
          <Flex direction="column" align="center" justify="center">
            <Heading as="h1" size="2xl" color="black" mb={5} fontFamily="Belleza" fontWeight="bold">
              {types.Contact.title}
            </Heading>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Text color="black" fontSize="xl" mt={2} mb={5} fontFamily="Belleza" fontWeight="bold">
              {types.Contact.description}
            </Text>
          </Flex>
        </Box>
        <Box w="full" h="full" bg="gray.50" p={10}>
          <Box w="full" h="full" bg="white" p={10} borderRadius="lg" shadow="md">
          <SimpleGrid columns={[1, 2]} spacing={10}>
            <FormControl id="name" isRequired>
              <FormLabel fontFamily="Belleza" fontWeight="bold">{types.Contact.formName}</FormLabel>
              <Input focusBorderColor="yellow.500" variant="flushed" placeholder={types.Contact.formNamePlaceholder} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel fontFamily="Belleza" fontWeight='bold'>
                {types.Contact.formEmail}
              </FormLabel>
              <Input focusBorderColor="yellow.500" variant="flushed" placeholder={types.Contact.formEmailPlaceholder} />
            </FormControl>
            <FormControl id="telephone" isRequired>
              <FormLabel fontFamily="Belleza" fontWeight='bold'>
                {types.Contact.formPhone}
              </FormLabel>
              <Input focusBorderColor="yellow.500"  variant="flushed" placeholder={types.Contact.formPhonePlaceholder} />
            </FormControl>
            <FormControl id="city" isRequired>
              <FormLabel fontFamily="Belleza" fontWeight='bold' 
              >{types.Contact.formCity}
            </FormLabel>
              <Input focusBorderColor="yellow.500" variant="flushed" placeholder={types.Contact.formCityPlaceholder} />
            </FormControl>
          </SimpleGrid>
          <FormLabel mt={5} fontFamily="Belleza" fontWeight='bold'>{types.Contact.checkBox}</FormLabel>
          <Flex direction="column" align="center" justify="center" mt={5}>
            <CheckboxGroup colorScheme='yellow'>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox value={types.Contact.checkBox1} fontFamily="Belleza" >{types.Contact.checkBox1}</Checkbox>
                <Checkbox value={types.Contact.checkBox2} fontFamily="Belleza">{types.Contact.checkBox2}</Checkbox>
                <Checkbox value={types.Contact.checkBox3} fontFamily="Belleza">{types.Contact.checkBox3}</Checkbox>
                <Checkbox value={types.Contact.checkBox4} fontFamily="Belleza">{types.Contact.checkBox4}</Checkbox>
                <Checkbox value={types.Contact.checkBox5} fontFamily="Belleza">{types.Contact.checkBox5}</Checkbox>
                <Checkbox value={types.Contact.checkBox6} fontFamily="Belleza">{types.Contact.checkBox6}</Checkbox>
                <Checkbox value={types.Contact.checkBox7} fontFamily="Belleza">{types.Contact.checkBox7}</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Flex>
        
          <FormControl id="message" isRequired mt={5}>
            <FormLabel fontFamily="Belleza" fontWeight='bold'>
              {types.Contact.formMessage}
            </FormLabel>
            <Textarea placeholder={types.Contact.formMessagePlaceholder} focusBorderColor="yellow.500" fontFamily="Belleza" />
          </FormControl>
          <Flex direction="column" align="flex-end" justify="flex-end" mt={5}>
            <Button
              colorScheme="yellow"
              variant="solid"
              size="lg"
              type="submit"
              mt={5}
            >
              {types.Contact.formSubmit}
            </Button>
          </Flex>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
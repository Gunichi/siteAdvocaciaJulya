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
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { types } from '@/utils/types';

export default function Contact() {
  return (
    <Container bg="gray.50" maxW="full" mt={0} centerContent overflow="hidden">
      <Box w="full" h="full" bg="gray.50" p={10}>
        <Flex direction="column" align="center" justify="center">
          <Heading as="h1" size="2xl" color="black" mb={5}>
            {types.Contact.title}
          </Heading>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Text color="black" fontSize="xl" mt={2}>
            {types.Contact.description}
          </Text>
        </Flex>
        <Box w="full" h="full" bg="gray.50" p={10}>
          <Box w="full" h="full" bg="white" p={10} borderRadius="lg" shadow="md">
          <SimpleGrid columns={[1, 2]} spacing={10}>
            <FormControl id="name" isRequired>
              <FormLabel>{types.Contact.formName}</FormLabel>
              <Input focusBorderColor="yellow.500" variant="flushed" placeholder={types.Contact.formNamePlaceholder} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>{types.Contact.formEmail}</FormLabel>
              <Input focusBorderColor="yellow.500" variant="flushed" placeholder={types.Contact.formEmailPlaceholder} />
            </FormControl>
            <FormControl id="telephone" isRequired>
              <FormLabel>{types.Contact.formPhone}</FormLabel>
              <Input focusBorderColor="yellow.500"  variant="flushed" placeholder={types.Contact.formPhonePlaceholder} />
            </FormControl>
            <FormControl id="city" isRequired>
              <FormLabel>{types.Contact.formCity}</FormLabel>
              <Input focusBorderColor="yellow.500" variant="flushed" placeholder={types.Contact.formCityPlaceholder} />
            </FormControl>
          </SimpleGrid>
          <FormLabel mt={5}>{types.Contact.checkBox}</FormLabel>
          <Flex direction="column" align="center" justify="center" mt={5}>
            <CheckboxGroup colorScheme='yellow'>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox value={types.Contact.checkBox1}>{types.Contact.checkBox1}</Checkbox>
                <Checkbox value={types.Contact.checkBox2}>{types.Contact.checkBox2}</Checkbox>
                <Checkbox value={types.Contact.checkBox3}>{types.Contact.checkBox3}</Checkbox>
                <Checkbox value={types.Contact.checkBox4}>{types.Contact.checkBox4}</Checkbox>
                <Checkbox value={types.Contact.checkBox5}>{types.Contact.checkBox5}</Checkbox>
                <Checkbox value={types.Contact.checkBox6}>{types.Contact.checkBox6}</Checkbox>
                <Checkbox value={types.Contact.checkBox7}>{types.Contact.checkBox7}</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Flex>
        
          <FormControl id="message" isRequired mt={5}>
            <FormLabel>{types.Contact.formMessage}</FormLabel>
            <Textarea placeholder={types.Contact.formMessagePlaceholder} focusBorderColor="yellow.500" />
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
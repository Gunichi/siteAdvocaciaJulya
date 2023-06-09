import { types } from '@/utils/types';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  useColorModeValue,
  Flex,
  Link,
} from '@chakra-ui/react';
import { AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import '@fontsource/belleza'

export default function Card() {

  const openImage = () => {
    //Onclick image open the image 
    window.open('fotoJulya.jpg', '_blank');

  }


  return (
    <Center py={6} bg={useColorModeValue('white', 'inherit')}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'fotoJulya.jpg'
          }
          cursor={'pointer'}
          onClick={openImage}
          mb={4}
          pos={'relative'}
          _hover={{
            boxShadow: '2xl',
            transform: 'scale(2)',
          }}

          
        />
        <Heading fontSize={'2xl'} fontFamily={'Belleza'} fontWeight={'bold'}>
          {types.About.name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4} fontFamily={'Belleza'}>
          {types.About.description} <br />
          {types.About.description1}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          fontFamily={'Belleza'}
        >
          {types.About.description2}
        </Text>

        {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge>
        </Stack> */}

        <Flex align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Link isExternal mr={4} _hover={{ color: '#000' }}>
            <Box mr={2} bg="#ff008428" rounded="full" p={1}>
              <AiFillInstagram 
                size={25}
                style={{ color: '#FF0084' }}
              />
            </Box>
          </Link>
          <Link isExternal mr={4}>
            <Box mr={2} bg="#25D36628" rounded="full" p={1}>
              <RiWhatsappFill 
                size={25}
                style={{ color: '#25D366' }}
              />
            </Box>
          </Link>
        </Flex>
      </Box>
    </Center>
  );
}
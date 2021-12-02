import React from 'react'
import { Box, Center, Image, useColorModeValue, Stack, Heading } from '@chakra-ui/react'

function Company ({ stonk }) {
  const image = `https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png`

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Center>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'200px'}>
            <Image
              rounded={'lg'}
              height={'auto'}
              width={128}
              objectFit={'cover'}
              src={image}
            />
          </Box>
        </Center>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            {stonk.companyName}
          </Heading>
        </Stack>
      </Box>
    </Center>
  )
}

export default Company

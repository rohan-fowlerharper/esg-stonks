import React from 'react'
import { Box, Center, Image, useColorModeValue, Stack, Heading, Flex } from '@chakra-ui/react'

import RegularLayout from '../layouts/RegularLayout'

function Company ({ stonk }) {
  const image = `https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png`

  return (
    <RegularLayout>
      {/* <Box>
        <Text>{stonk.companyName}</Text>
        <img src={`https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png`}/> */}
      {/* <Text>{stonk.environmentGrade}</Text>
        <Text>{stonk.socialGrade}</Text>
        <Text>{stonk.governanceGrade}</Text> */}
      {/* </Box> */}
      <Flex gap={6}>
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
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${image})`,
                filter: 'blur(15px)',
                zIndex: -1
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)'
                }
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={image}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {stonk.companyName}
              </Heading>
            </Stack>
          </Box>
        </Center>
      </Flex>
    </RegularLayout>
  )
}

export default Company

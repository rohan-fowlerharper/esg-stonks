import React from 'react'
import { Box, Center, Image, useColorModeValue, Flex, Heading } from '@chakra-ui/react'
import RatingBar from './RatingBar'
// CheckIcon and CloseIcon

import ActiveStonkButton from './ActiveStonkButton'

function Company ({ stonk }) {
  const image = `https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png`

  return (
    <Center w='full'>
      <Box
        role='company'
        w='full'
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow='2xl'
        rounded='lg'
        position='relative'
      >
        <Box
          roundedTop='lg'
          h={36}
          bg='white'
          p={4}
        >
          <Center w='full' h='full'>
            <Image
              rounded={'sm'}
              maxHeight='full'
              width='auto'
              src={image}
              alt={stonk.stockSymbol}
            />
          </Center>
        </Box>
        <Box p='6'>
          <Heading
            as='h4'
            fontSize={['md', null, 'lg']}
            fontWeight='semibold'
            lineHeight='tight'
            isTruncated
          >
            {stonk.companyName}
          </Heading>
          <Flex mt={2} justifyContent='space-between'>
            <Heading
              as='h5'
              fontSize='lg'
              fontWeight='semibold'
              lineHeight='tight'
              isTruncated
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {stonk.stockSymbol}
            </Heading>
            {/* icon to be moved, todo: use closeicon and checkicon when it's selected */}
            <ActiveStonkButton stockSymbol={stonk.stockSymbol}/>
          </Flex>
          <RatingBar rating={stonk.totalScore} max={3000} mt={4} />
        </Box>
      </Box>
    </Center>
  )
}

export default Company

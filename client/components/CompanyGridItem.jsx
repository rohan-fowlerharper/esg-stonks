import React from 'react'
import {
  GridItem,
  Box,
  Center,
  Image,
  useColorModeValue,
  Flex,
  Heading,
  HStack
} from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

import RatingBar from './RatingBar'
// CheckIcon and CloseIcon

import ActiveStonkButton from './ActiveStonkButton'
import FavouriteStonkButton from './FavouriteStonkButton'
import TickersLabel from './TickersLabel'
import CompanyAccordion from './CompanyAccordion'

function CompanyGridItem ({ stonk }) {
  const image = `https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png`
  const { isAuthenticated } = useAuth0()

  // gray colorModeValue 600 400 is used a lot, extract it to a var
  return (
    <GridItem
      role='company'
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={['base', 'xl', null]}
      rounded='lg'
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
      <Box p={[2, null, 4]}>
        <Heading
          as='h4'
          fontSize={['md', 'lg', 'xl']}
          fontWeight='semibold'
          lineHeight='tight'
          isTruncated
        >
          {stonk.companyName}
        </Heading>
        <Flex mt={1} justifyContent='space-between'>
          <TickersLabel exchangeSymbol={stonk.exchangeSymbol} stockSymbol={stonk.stockSymbol} />
          {/* icon to be moved, todo: use closeicon and checkicon when it's selected */}
          <HStack spacing={[1, 2, null]}>
            <ActiveStonkButton stockSymbol={stonk.stockSymbol} />
            {isAuthenticated && <FavouriteStonkButton stonkId={stonk.id} />}
          </HStack>

        </Flex>

        <RatingBar rating={stonk.totalScore} max={3000} mt={4} level={stonk.totalLevel}/>

      </Box>
      <CompanyAccordion stonk={stonk}/>
    </GridItem>
  )
}

export default CompanyGridItem

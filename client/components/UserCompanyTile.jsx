import React from 'react'
import {
  Box,
  Center,
  Image,
  useColorModeValue,
  Heading,
  HStack
} from '@chakra-ui/react'

import RatingBar from './RatingBar'
import Rating from './Rating'
import TickersLabel from './TickersLabel'
import FavouriteStonkButton from './FavouriteStonkButton'

function UserCompanyTile ({ stonk }) {
  const image = stonk.stockSymbol && `https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png`

  return (
    <Box
      role='company'
      bg={useColorModeValue('white', 'gray.800')}
      w='full'
      boxShadow={['base', 'xl', null]}
      rounded='lg'
    >
      <Box
        h={36}
        bg='white'
        roundedTop='lg'
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
          fontSize={['sm', 'md', 'lg']}
          fontWeight='bold'
          lineHeight='tight'
          isTruncated
        >
          {stonk.companyName}
        </Heading>
        <HStack justifyContent='space-between'>
          <TickersLabel exchangeSymbol={stonk.exchangeSymbol} stockSymbol={stonk.stockSymbol} />
          <FavouriteStonkButton stonkId={stonk.id} />
        </HStack>

        <Rating
          rating={stonk.totalGrade}
          label='Overall'
        />
        <RatingBar
          rating={stonk.totalScore}
          max={3000}
          mb={4}
        />

        <Rating
          rating={stonk.environmentGrade}
          label='Environment'
        />
        <RatingBar
          rating={stonk.environmentScore}
          max={1000}
          mb={2}
        />

        <Rating
          rating={stonk.socialGrade}
          label='Social'
        />
        <RatingBar
          rating={stonk.socialScore}
          max={1000}
          mb={2}
        />

        <Rating
          rating={stonk.governanceGrade}
          label='Governance'
        />
        <RatingBar
          rating={stonk.governanceScore}
          max={1000}
          mb={2}
        />
      </Box>
    </Box>
  )
}

export default UserCompanyTile

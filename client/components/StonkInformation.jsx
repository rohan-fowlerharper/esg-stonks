import React from 'react'
import {
  Box,
  Center,
  Image,
  useColorModeValue,
  Flex,
  Heading,
  HStack,
  Text
} from '@chakra-ui/react'

import RatingBar from '../components/RatingBar'
import Rating from '../components/Rating'
// CheckIcon and CloseIcon

// const stonk = {
//   id: 1,
//   esg_id: 11119,
//   companyName: 'Apple Inc.',
//   exchangeSymbol: 'TSE',
//   stockSymbol: 'AAPL',
//   environmentGrade: 'AA',
//   environment_level: 'Excellent',
//   socialGrade: 'BB',
//   socialLevel: 'Medium',
//   governanceGrade: 'BB',
//   governance_level: 'Medium',
//   totalGrade: 'A',
//   total_level: 'High',
//   lastProcessingDate: '04-11-2021',
//   environmentScore: 671,
//   socialScore: 341,
//   governanceScore: 300,
//   total_score: 1312
// }

function StonkInformation ({ stonk }) {
  console.log(stonk)
  const grayResponsive = useColorModeValue('gray.600', 'gray.400')

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
          fontSize={['md', 'lg', 'xl']}
          fontWeight='bold'
          lineHeight='tight'
        >
          {stonk.companyName}
        </Heading>
        <Flex mb={2} justifyContent='space-between'>
          <HStack justifyContent='flex-start' spacing={1} color={grayResponsive}>
            <Heading
              as='h5'
              fontSize={['sm', '0.9rem', 'md']}
              fontWeight='semibold'
              lineHeight='tight'
            >
              {stonk.stockSymbol}
            </Heading>
            <Text>|</Text>
            <Heading
              as='h5'
              fontSize={['sm', '0.9rem', 'md']}
              fontWeight='semibold'
              lineHeight='tight'
            >
              {stonk.exchangeSymbol}
            </Heading>
          </HStack>
        </Flex>
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

export default StonkInformation

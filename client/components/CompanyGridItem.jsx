import React from 'react'
import {
  GridItem,
  Box,
  Center,
  Image,
  useColorModeValue,
  Flex,
  Heading,
  HStack,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'

import RatingBar from './RatingBar'
// CheckIcon and CloseIcon

import ActiveStonkButton from './ActiveStonkButton'

function CompanyGridItem ({ stonk }) {
  const image = `https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png`

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
        <Flex mt={2} justifyContent='space-between'>
          <HStack justifyContent='flex-start' spacing={1}>
            <Heading
              as='h5'
              fontSize={['sm', '0.9rem', 'md']}
              fontWeight='semibold'
              lineHeight='tight'
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {stonk.stockSymbol}
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>|</Text>
            <Heading
              as='h5'
              fontSize={['sm', '0.9rem', 'md']}
              fontWeight='semibold'
              lineHeight='tight'
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {stonk.exchangeSymbol}
            </Heading>
          </HStack>
          {/* icon to be moved, todo: use closeicon and checkicon when it's selected */}
          <ActiveStonkButton justifyContent='flex-end' stockSymbol={stonk.stockSymbol} />
        </Flex>

        <RatingBar rating={stonk.totalScore} max={3000} mt={4} />

      </Box>
      <Accordion allowToggle mt={1} >
        <AccordionItem style={{ borderBottom: 0 }}>
          <AccordionButton display='flex' justifyContent='center' h={6}>
            <AccordionIcon/>
          </AccordionButton>
          <AccordionPanel>
            <HStack justifyContent='space-between'>
              <Text fontWeight='semibold' color={useColorModeValue('gray.600', 'gray.400')}>Overall Grade:</Text>
              <Text fontWeight='semibold'>{stonk.totalGrade}</Text>
            </HStack>
            <Text fontWeight='semibold' color={useColorModeValue('gray.600', 'gray.400')}>Environment:</Text>
            <RatingBar rating={stonk.environmentScore} max={1000} mb={2} />
            <Text fontWeight='semibold' color={useColorModeValue('gray.600', 'gray.400')}>Social:</Text>
            <RatingBar rating={stonk.socialScore} max={1000} mb={2} />
            <Text fontWeight='semibold' color={useColorModeValue('gray.600', 'gray.400')}>Governance:</Text>
            <RatingBar rating={stonk.governanceScore} max={1000} />

          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </GridItem>
  )
}

export default CompanyGridItem

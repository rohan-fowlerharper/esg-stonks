import React from 'react'
import { Heading, Container, Stack, Text, Button, Flex } from '@chakra-ui/react'
import RegularLayout from '../layouts/RegularLayout'

function Home () {
  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
          Comparing ESG scores{' '}
            <Text as={'span'} color={'green.400'}>
            made easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} fontSize='xl'>
            Make better socially &amp; environmentally responsbile investment decisions. Compare companies sustainability performance &amp; ethics based on their ESG scores.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
            Get started
            </Button>
            <Button rounded={'full'} px={6}>
            Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
            <img src="/images/esg-diagram.png" />
          </Flex>

          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
          What are{' '}
            <Text as={'span'} color={'green.400'}>
              {"ESG's?"}
            </Text>
          </Heading>

          <Text color={'gray.500'} maxW={'3xl'} fontSize='xl'>
            ESG stands for{' '}
            <Text as={'span'} color={'green.400'}>
              Environmental
            </Text>,{' '}
            <Text as={'span'} color={'blue.400'}>
              Social
            </Text>, and{' '}
            <Text as={'span'} color={'yellow.300'}>
              Governance
            </Text>.
            <br/>
            ESG scores are becoming an increasingly popular metric for investors to apply non-financial factors as part of their analysis to identify risks and growth opportunities.
          </Text>
        </Stack>
      </Container>
    </>
  )
}

export default Home

import React from 'react'
import { Heading, Container, Stack, Text, Button, Flex, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as RouteLink } from 'react-router-dom'

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
            <Link as={RouteLink} to='/companies'>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'green'}
                bg={'green.400'}
                _hover={{ bg: 'green.500' }}>
            Get started
              </Button>
            </Link>
            <Link href='#learnMore'>
              <Button rounded={'full'} px={6}>
            Learn more
              </Button>
            </Link>
          </Stack>
          <Flex w={'full'}>
            <img src="/images/esg-diagram.png" />
          </Flex>

          <Heading
            id='learnMore'
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

          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
          How are{' '}
            <Text as={'span'} color={'green.400'}>
              {"ESG's"} scored?
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} fontSize='xl'>
            This website uses ESG scores calculated by {' '}
            <Link href='https://www.esgenterprise.com/' isExternal color='blue.500'>
            ESG Enterprise <ExternalLinkIcon mx='2px' />
            </Link>
            <br/>
            Scores are based on ESG performance and degree of transparency in reporting material ESG data publicly &amp; privately.
          </Text>
          <img src="/images/esg-score-diagram.png" />
          <Text color={'gray.500'} maxW={'4xl'} fontSize='3xl'>
            <Text as={'span'} color={'green.400'} fontWeight='bold'>A{' '}</Text>
            excellent ESG performance &amp; high transparency in reporting.
            <br/>
            <Text as={'span'} color={'orange.300'} fontWeight='bold'>B{' '}</Text>
            good ESG performance &amp; above-average reporting.
            <br/>
            <Text as={'span'} color={'yellow.300'} fontWeight='bold'>C{' '}</Text>
            satisfactory ESG performance &amp; moderate reporting.
            <br/>
            <Text as={'span'} color={'red.500'} fontWeight='bold'>D{' '}</Text>
            poor ESG performance &amp; insufficient reporting.
          </Text>
        </Stack>
      </Container>
    </>
  )
}

export default Home

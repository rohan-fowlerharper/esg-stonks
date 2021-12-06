import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Text,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'

import RatingBar from './RatingBar'

function CompanyAccordion ({ stonk }) {
  return (
    <Accordion allowToggle mt={1} >
      <AccordionItem style={{ borderBottom: 0 }}>
        <AccordionButton display='flex' justifyContent='center' h={6}>
          <AccordionIcon/>
        </AccordionButton>
        <AccordionPanel>
          <HStack justifyContent='space-between'>
            <Text fontWeight='semibold' color={useColorModeValue('gray.600', 'gray.400')}>Overall Grade:</Text>
            <Text fontWeight='semibold' aria-label='total-grade'>{stonk.totalGrade}</Text>
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
  )
}

export default CompanyAccordion

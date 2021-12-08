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
  const styleProps = {
    fontWeight: 'semibold',
    color: useColorModeValue('gray.600', 'gray.400')
  }
  return (
    <Accordion allowToggle mt={1} >
      <AccordionItem style={{ borderBottom: 0 }}>
        <AccordionButton display='flex' justifyContent='center' h={6}>
          <AccordionIcon/>
        </AccordionButton>
        <AccordionPanel>
          <HStack justifyContent='space-between'>
            <Text {...styleProps}>Overall Grade:</Text>
            <Text fontWeight='semibold' aria-label='total-grade'>{stonk.totalGrade}</Text>
          </HStack>

          <Text {...styleProps}>Environment:</Text>
          <RatingBar rating={stonk.environmentScore} max={1000} mb={2} level={stonk.environmentLevel} />

          <Text {...styleProps}>Social:</Text>
          <RatingBar rating={stonk.socialScore} max={1000} mb={2} level={stonk.socialLevel} />

          <Text {...styleProps}>Governance:</Text>
          <RatingBar rating={stonk.governanceScore} max={1000} level={stonk.governanceLevel} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default CompanyAccordion

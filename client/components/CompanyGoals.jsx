import React, { useEffect, useState } from 'react'

import { getGoals } from '../apis/stonks'

import { Box, Text, Heading, List, ListItem, ListIcon, HStack, Tooltip, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const CompanyGoals = ({ stockSymbol }) => {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    getGoals(stockSymbol)
      .then(goals => setGoals(goals))
      .catch(err => console.error(err))
  }, [stockSymbol])

  return (
    // TODO - add a skeleton while loading
    // TODO - add a message if there are no goals
    // TODO - add a message if there is an error
    // TODO - move height and width to parent component
    <Box
      w='300px'
      h='300px'
    >
      <Heading as='h2' mb={2}>{stockSymbol}</Heading>
      <List spacing={4}>

        {goals.map((goal, idx) => {
          return (
            <ListItem key={`goal-${stockSymbol}-${idx}`}>

              <Heading
                as='h5'
                fontWeight='semibold'
                fontSize='lg'
              >
                {goal.sasb.replace(/ - SASB$/gm, '')}
              </Heading>

              <Divider
                mt={1}
                mb={2}
              />

              <HStack justifyContent='space-between'>
                <Text>{goal.sdg.replace(/ - U.N. SDG$/gm, '')}</Text>

                {/* Can convert tooltip to a popover */}

                <Tooltip
                  hasArrow
                  label='Find SDG in Google'
                  bg='gray.300'
                  color='black'
                  placement='right'
                >
                  <ListIcon
                    as={ExternalLinkIcon}
                    color={'green.500'}
                    cursor='pointer'
                    onClick={() => window.open(`https://www.google.com/search?q=${goal.sdg.replace('&', '%26')}`)}
                    _hover={{ color: 'green.300' }}
                    transition='all 0.2s'
                  />
                </Tooltip>
              </HStack>

            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default CompanyGoals

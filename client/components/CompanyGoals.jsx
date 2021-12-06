import React, { useEffect, useState } from 'react'

import { getGoals } from '../apis/stonks'

import { Box, Text, Heading, List, ListItem, ListIcon, HStack, Tooltip, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const CompanyGoals = ({ stockSymbol }) => {
  const [goals, setGoals] = useState([])
  const [showMore, setShowMore] = useState(false)

  const goalsToShow = goals.length > 10 ? showMore === true ? goals : goals.slice(0, 10) : goals

  useEffect(() => {
    getGoals(stockSymbol)
      .then(goals => setGoals(goals))
      .catch(err => console.error(err))
  }, [stockSymbol])

  console.log(goals)
  return (
    // TODO - add a skeleton while loading
    // TODO - add a message if there are no goals
    // TODO - add a message if there is an error
    // TODO - move height and width to parent component
    <Box
      w='full'
    >
      <Heading as='h2' mb={2}>{stockSymbol}</Heading>
      <List spacing={4}>
        {goalsToShow.map((goal, idx) => {
          return (
            <ListItem key={`goal-${stockSymbol}-${idx}`}>

              <Heading
                as='h5'
                fontWeight='semibold'
                fontSize={['md', null, 'lg']}
              >
                {goal.sasb.replace(/ - SASB$/gm, '')}
              </Heading>

              <Divider
                mt={1}
                mb={2}
              />

              <HStack justifyContent='space-between'>
                <Text
                  fontSize={['sm', 'md', null]}
                >{goal.sdg.replace(/ - U.N. SDG$/gm, '')}</Text>

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
      {goals.length > 10 && (
        <Box
          mt={2}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Text
            fontSize={['xs', 'sm']}
            color='gray.500'
            onClick={() => setShowMore(!showMore)}
            cursor='pointer'
          >
            {showMore ? 'Show Less' : `Show ${goals.length - 10} More`}
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default CompanyGoals

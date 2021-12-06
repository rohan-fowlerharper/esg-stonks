import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import { Box } from '@chakra-ui/react'

function CompanyRadar ({ stonk1, stonk2, ...rest }) {
  const data = [
    {
      esg: 'environment',
      company1: stonk1.environmentScore,
      company2: stonk2.environmentScore
    },
    {
      esg: 'social',
      company1: stonk1.socialScore,
      company2: stonk2.socialScore
    },
    {
      esg: 'governance',
      company1: stonk1.governanceScore,
      company2: stonk2.governanceScore
    }
  ]

  return (
    <Box {...rest}>
      <ResponsiveRadar
        data={data}
        keys={['company1', 'company2']}
        indexBy={['esg']}
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </Box>
  )
}

export default CompanyRadar

import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import { Box } from '@chakra-ui/react'

function CompanyRadar ({ stonk1, stonk2, ...rest }) {
  const data = [
    {
      esg: 'Environment',
      [stonk1.companyName]: stonk1.environmentScore,
      [stonk2.companyName]: stonk2.environmentScore
    },
    {
      esg: 'Social',
      [stonk1.companyName]: stonk1.socialScore,
      [stonk2.companyName]: stonk2.socialScore
    },
    {
      esg: 'Governance',
      [stonk1.companyName]: stonk1.governanceScore,
      [stonk2.companyName]: stonk2.governanceScore
    }
  ]

  const LabelComponent = ({ id, x, y, anchor }) => (
    <g transform={`translate(${x}, ${y})`}>
      <g transform={`translate(${anchor === 'end' ? -60 : anchor === 'middle' ? -30 : 0}, -0)`}>
        <text style={{
          fill: '#999'
        }}>{id}</text>
      </g>
    </g>
  )

  return (
    <Box {...rest}>
      <ResponsiveRadar
        data={data}
        keys={[stonk1.companyName, stonk2.companyName]}
        indexBy={['esg']}
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        gridLabel={LabelComponent}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={['#805AD5', '#DD6B20']}
        blendMode="mutiply"
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

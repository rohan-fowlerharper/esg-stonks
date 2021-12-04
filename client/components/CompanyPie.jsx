import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box } from '@chakra-ui/react'

// TODO: render correct values within the pie chart
// TODO: add a legend
// https://nivo.rocks/pie/
const CompanyPie = ({ stonk, ...rest }) => {
  const data = [{
    id: 'E',
    label: 'Environment',
    value: stonk.environmentScore
  },
  {
    id: 'S',
    label: 'Social',
    value: stonk.socialScore
  },
  {
    id: 'G',
    label: 'Governance',
    value: stonk.governanceScore
  },
  {
    id: 'Total',
    label: 'Total possible score',
    value: (3000 - stonk.totalScore)
  }]
  console.log(rest)
  // const angle = (stonk.totalScore / 3000) * 360
  return (
    <Box {...rest} >

      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={0}
        endAngle={360}
        // innerRadius={0.75}
        innerRadius={0.50}
        activeOuterRadiusOffset={8}
        colors={['#48BB78', '#4299E1', '#F6E05E', '#a7aeb8']}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['brighter', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#808080"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['brighter', 1.2]] }}
      />
    </Box>
  )
}

export default CompanyPie

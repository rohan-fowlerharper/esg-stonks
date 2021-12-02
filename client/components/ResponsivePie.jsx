import React from 'react'
import { useSelector } from 'react-redux'
import { ResponsivePie } from '@nivo/pie'

// TODO: render correct values within the pie chart
// TODO: add a legend
// https://nivo.rocks/pie/
const MyResponsivePie = () => {
  const stonks = useSelector(state => state.stonks)
  return (
    <ResponsivePie
      data={stonks.map(stonk => ({
        id: stonk.stockSymbol,
        label: stonk.stockSymbol,
        value: stonk.totalScore
      }))}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={0}
      endAngle={360}
      innerRadius={0.75}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['brighter', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#808080"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['brighter', 1.2]] }}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#f1f1f1',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#7c7c7c'
              }
            }
          ]
        }
      ]}
    />
  )
}

export default MyResponsivePie

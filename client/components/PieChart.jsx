import React from 'react'
import * as d3 from 'd3'

// If using nivo lib is too difficult to use, use this component?
function PieChartWithouNivo () {
  const width = 300
  const height = 300
  const radius = Math.min(width, height) / 2
  const color = d3.scaleOrdinal(d3.schemeCategory10)
  const arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0)

  const pie = d3.pie()
    .value(d => d.value)
    .sort(null)

  const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

  const data = [
    {
      label: 'One',
      value: 30
    },
    {
      label: 'Two',
      value: 20
    },
    {
      label: 'Three',
      value: 50
    },
    {
      label: 'Four',
      value: 10
    }
  ]

  const g = svg.selectAll('.arc')
    .data(pie(data))
    .enter().append('g')
    .attr('class', 'arc')

  g.append('path')
    .attr('d', arc)
    .attr('fill', d => color(d.data.label))

  return (
    <div>
      <svg width={width} height={height} />
    </div>
  )
}

export default PieChartWithouNivo

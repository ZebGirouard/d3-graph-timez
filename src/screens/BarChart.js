import React, {
  useEffect,
  useRef,
  useState,
} from 'react'
import * as d3 from 'd3'

const BarChart = () => {
  const d3Container = useRef(null)
  const [ data, setData ] = useState([ 2, 4, 2, 6, 8 ])
  // linter booo
  console.log(setData)
  const drawBarChart = (chartData) => {
    const canvasHeight = 400
    const canvasWidth = 600
    const scale = 20
    const svgCanvas = d3.select(d3Container.current)
    const update = svgCanvas
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
      .style('border', '1px solid black')
    update.selectAll('rect')
      .data(chartData).enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', (datapoint) => datapoint * scale)
      .attr('fill', 'orange')
      .attr('x', (datapoint, iteration) => iteration * 45)
      .attr('y', (datapoint) => (canvasHeight - datapoint * scale))
    update.exit()
      .remove()
  }
  useEffect(() => {
    if (d3Container.current) drawBarChart(data)
  }, [ data ])
  return <div ref={ d3Container } />
}
export default BarChart

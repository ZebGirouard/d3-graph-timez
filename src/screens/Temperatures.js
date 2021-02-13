import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const temperatureData = [ 8, 5, 13, 9, 12 ]
const Temperatures = () => {
  const d3Container = useRef(null)

  useEffect(() => {
    if (d3Container.current) {
      const graph = d3.select(d3Container.current)
      const update = graph
        .selectAll('h2')
        .data(temperatureData)
      update.enter()
        .append('h2')
        .text((datapoint) => `${ datapoint } degrees`)
        .attr('class', (datapoint) => (datapoint > 10 ? 'highTemperature' : 'lowTemperature'))
      update.exit()
        .remove()
    }
  }, [ d3Container ])

  return <div ref={ d3Container } />
}

export default Temperatures

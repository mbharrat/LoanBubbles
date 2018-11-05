import React from 'react'
import * as d3 from 'd3'
import './App.css'
import BubbleChart from './components/BubbleChart'
import Bubbles from './components/Bubbles'
import TypeTitles from './components/TypeTitles'
import GroupingPicker from './components/GroupingPicker'
import { createNodes } from './utils'
import { width, height, center, typeCenters } from './constants'

export default class App extends React.Component {
  state = {
    data: [],
    grouping: 'all',
  }

  componentDidMount() {
    
    
      d3.csv('data/NY.csv', (err, data)=>{
      if (err!== null) {
        alert("Could not load NY Data");
        return
      }
      console.log(data);
      this.setState({
        data: createNodes(data),
      })
    })
  }

  onGroupingChanged = (newGrouping) => {
    this.setState({
      grouping: newGrouping,
    })
  }

  render() {
    const { data, grouping } = this.state
    return (
      <div className="App">
        <GroupingPicker onChanged={this.onGroupingChanged} active={grouping} />
        <BubbleChart width={width} height={height}>
        <Bubbles data={data} forceStrength={0.03} center={center} typeCenters={typeCenters} groupByType={grouping === 'type'} />
          {
            grouping === 'type' &&
            <TypeTitles width={width} typeCenters={typeCenters}/>
          }
        </BubbleChart>
      </div>
    )
  }

}

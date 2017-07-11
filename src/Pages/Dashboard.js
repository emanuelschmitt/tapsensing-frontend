import React from 'react'
import { Col, Grid } from 'react-bootstrap'
import { Bar, Pie } from 'react-chartjs-2'
import { DashboardPanel } from '../Components/DashboardPanel'

import { getStatistics } from '../networking'
import { transformPayload } from '../utils/chartjs'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      statisticsData: null
    }
  }

  componentDidMount () {
    this.getStatisticsData.bind(this)()
  }

  getStatisticsData () {
    getStatistics()
      .then(data => data.json())
      .then(responseJSON => {
        this.setState({
          statisticsData: responseJSON
        })
      })
  }

  renderStatisticsPlots () {
    if (this.state.statisticsData == null) {
      return (<div>Loading...</div>)
    }

    const stats = this.state.statisticsData

    const payloadToChartJs = (key) => {
      return {
        'label': key,
        'data': transformPayload(
          key,
          stats[key].counts,
          stats[key].labels
        )
      }
    }

    const addHeaderTextAndChartType = (obj) => {
      let headerText = ''
      let chartType = ''

      switch (obj.label) {
        case 'sensorWeek':
          headerText = 'Collected SensorData last Week'
          chartType = 'Bar'
          break

        case 'touchWeek':
          headerText = 'Collected TouchEvents last Week'
          chartType = 'Bar'
          break

        case 'sessionWeek':
          headerText = 'Sessions performed last Week'
          chartType = 'Bar'
          break

        case 'touch24':
          headerText = 'Collected TouchEvents last 24 hours'
          chartType = 'Bar'
          break

        case 'sensor24':
          headerText = 'Collected SensorData last 24 hours'
          chartType = 'Bar'
          break

        case 'usersParticipated':
          headerText = 'Users Participated Today'
          chartType = 'Pie'
          break
      }

      obj.headerText = headerText
      obj.chartType = chartType

      return obj
    }

    const renderChart = (obj) => {
      const Chart = obj.chartType === 'Bar'
        ? <Bar data={obj.data} height={220} />
        : <Pie data={obj.data} height={220} />

      return (
        <Col xs={4} key={obj.label}>
          <DashboardPanel header={obj.headerText}>
            {Chart}
          </DashboardPanel>
        </Col>
      )
    }

    return Object.keys(stats)
      .map(payloadToChartJs)
      .map(addHeaderTextAndChartType)
      .map(renderChart)
  }

  render () {
    return (
      <Grid>
        {this.renderStatisticsPlots()}
      </Grid>
    )
  }
}

export default Dashboard

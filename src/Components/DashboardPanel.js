import React from 'react'
import { Panel } from 'react-bootstrap'
import PropTypes from 'prop-types'

const DashboardPanel = (props) => {
  return (
    <Panel header={props.header}>
      {props.children}
    </Panel>
  )
}

DashboardPanel.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node
}

export { DashboardPanel }

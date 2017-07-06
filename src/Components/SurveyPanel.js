import React from 'react'
import { Panel } from 'react-bootstrap'

const SurveyPanel = (props) => (
  <div>
    <h4>{props.header}</h4>
    <Panel>
      {props.children}
    </Panel>
  </div>
)

export default SurveyPanel

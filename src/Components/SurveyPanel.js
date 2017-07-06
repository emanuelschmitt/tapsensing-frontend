import React from 'react'
import styled from 'styled-components'
import { Panel } from 'react-bootstrap'

const Div = styled.div`
    margin-bottom: 3em;
`

const SurveyPanel = (props) => (
  <Div>
    <h4>{props.header}</h4>
    <Panel>
      {props.children}
    </Panel>
  </Div>
)

export default SurveyPanel

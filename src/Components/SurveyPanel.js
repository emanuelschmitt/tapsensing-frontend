import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { Panel } from 'react-bootstrap'

const Section = styled.div`
    margin-bottom: 2em;
`

const SurveyPanel = (props) => (
  <Section>
    <h4>{props.header}</h4>
    <Panel>
      {props.children}
    </Panel>
  </Section>
)

SurveyPanel.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node
}

export default SurveyPanel

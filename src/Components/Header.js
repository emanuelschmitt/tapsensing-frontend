import React from 'react'
import styled from 'styled-components'
import { Panel, Grid, Col, Row } from 'react-bootstrap'

const Wrapper = styled.div`
    background-color: skyblue;
    padding: 1em;
    margin-bottom: 1em;

    font-size: 3em;
    color: white;
    font-weight: bold;
    text-align: center;
`

const Header = (props) => (
  <Wrapper>
      TapSensing Experiment
  </Wrapper>
)

export default Header
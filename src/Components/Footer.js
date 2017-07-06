import React from 'react'
import styled from 'styled-components'
import { Panel, Grid, Col, Row } from 'react-bootstrap'

const Wrapper = styled.div`
    background-color: skyblue;
    padding: 4em;
    margin: 2em 0 0 0;
`

const Footer = (props) => (
  <Wrapper>
      <Grid>
        <Col md={12}>
            <Row>
            </Row>
        </Col>
      </Grid>
  </Wrapper>
)

export default Footer
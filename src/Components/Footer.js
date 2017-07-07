import React from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-bootstrap'

const Wrapper = styled.div`
    padding: 2em;
    margin: 2em 0 0 0;
`

const Footer = (props) => (
  <Wrapper>
    <Grid>
      <Col md={12}>
        <Row />
      </Col>
    </Grid>
  </Wrapper>
)

export default Footer

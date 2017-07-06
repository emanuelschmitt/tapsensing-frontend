import React from 'react'
import { Form } from 'formsy-react-components'
import { Row, Col, Button, Grid } from 'react-bootstrap'

import PersonalInformation from '../Sections/PersonalInformation'
import SmartphoneUsage from '../Sections/SmartphoneUsage'

import postPreTestSurveyData from '../networking'

const layoutOption = 'vertical'

const onDataSubmit = (data) => {
    
    // concatenate the entered input modalities
    data['input_modalities'] = data['input_modalities'].reduce(
        (a, b) => a + ', ' + b
    )

    postPreTestSurveyData(data)
        .then((response) => console.log(response.json()))
        .catch((error) => console.log)
}

const PreTestSurvey = (props) => {
  return (
    <Grid>
        <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
            <Row>
                <h2>Pre-Test Survey</h2>
                <hr/>
                <Form onSubmit={onDataSubmit} layout={layoutOption} >
                    <PersonalInformation />
                    <SmartphoneUsage />
                    <Button bsClass="btn btn-default btn-large btn-block" type='submit'>Submit</Button>
                </Form>
            </Row>
        </Col>
    </Grid>
  )
}

export default PreTestSurvey

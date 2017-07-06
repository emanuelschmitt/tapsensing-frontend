import React from 'react';
import { Form } from 'formsy-react-components';
import { Row, Col, Button } from 'react-bootstrap';

import PersonalInformation from '../Sections/PersonalInformation'
import SmartphoneUsage from '../Sections/SmartphoneUsage'

const layoutOption = 'vertical';

const onDataSubmit = (data) => {
    console.log(data);
}

const PreTestSurvey = (props) => {
    return (
        <Row>
            <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
                <h1>Pre-Test-Form</h1>
                <hr/>
                <Form onSubmit={onDataSubmit} layout={layoutOption} >
                    <PersonalInformation />
                    <SmartphoneUsage />
                    <Button type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PreTestSurvey;

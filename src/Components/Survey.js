import React, { Component } from 'react';
import { Form, Input, RadioGroup, Select, Checkbox } from 'formsy-react-components';
import { Row, Col } from 'react-bootstrap';

const layoutOption = 'vertical';

const radioOptions = [
    {value: 'a', label: 'Option A'},
    {value: 'b', label: 'Option B'},
    {value: 'c', label: 'Option C'}
];

const genderOptions = [
    {value: 'W', label: 'Female'},
    {value: 'M', label: 'Male'}
];

const handOptions = [
    {value: 'Left', label: 'Left Hand'},
    {value: 'Right', label: 'Right Hand'}
];

const inputModalityOptions = [
    {value: 'Index', label: 'Using the INDEX finger while holding the device in the other hand.'},
    {value: 'Thumb', label: 'Using the THUMB while holding the device in the same hand.'}
];

const YesNoOptions = [
    {value: true, label: 'Yes'},
    {value: false, label: 'No'},
];

// Gender Age Profession Hand

// Device you use

const SurveyForm = (props) => {
    return (
        <Row>
            <Col md={8} mdOffset={2}>
                <Form
                    onSubmit={(data) => { console.log(data) }}
                    layout={layoutOption}
                    >
                    <h4>Personal Information</h4>
                    <hr/>
                    <fieldset>
                        <Input
                            name="age"
                            label="Age"
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <RadioGroup
                            name="gender"
                            label="Gender"
                            options={genderOptions}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <Input
                            name="occupation"
                            label="Occupation"
                            required
                        />
                    </fieldset>
                    <h4>Smartphone Usage</h4>
                    <hr/>
                    <fieldset>
                        <RadioGroup
                            name="smartphoneUser"
                            label="Are you a smartphone user?"
                            options={YesNoOptions}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <RadioGroup
                            name="inputModality"
                            label="Which finger do you usually use when you interact with a smartphone touch screen?"
                            options={inputModalityOptions}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <Select
                            name="hand"
                            label="In which hand do you regularly hold your smartphone?"
                            options={handOptions}
                        />
                    </fieldset>
                    <fieldset>
                        <Input
                            name="occupation"
                            label="What is your Occupation?"

                            required
                        />
                    </fieldset>
                    <fieldset>
                        <RadioGroup
                            name="radioGrp2"
                            type="inline"
                            label="Radio group (inline)"
                            help="This is a required radio group."
                            options={radioOptions}
                            required
                        />
                    </fieldset>
                </Form>
            </Col>
        </Row>
    )
}

export default SurveyForm;

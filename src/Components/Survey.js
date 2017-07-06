import React, { Component } from 'react';
import { Form, Input, RadioGroup, Select, Checkbox, CheckboxGroup } from 'formsy-react-components';
import { Row, Col, Button } from 'react-bootstrap';

const layoutOption = 'vertical';

const genderOptions = [
    {value: 'W', label: 'Female'},
    {value: 'M', label: 'Male'}
];

const handOptions = [
    {value: 'Left', label: 'Left Handed'},
    {value: 'Right', label: 'Right Handed'}
];

const inputModalityOptions = [
    {value: 'Index', label: 'Using the index finger while holding the device in the other hand.'},
    {value: 'Thumb', label: 'Using the thumb while holding the device in the same hand.'},
    {value: 'BothThumb', label: 'Typing with both thumbs while holding the device in both hands.'}
];

const YesNoOptions = [
    {value: true, label: 'Yes'},
    {value: false, label: 'No'},
];

const deviceUsageOptions = [
    {value: '< 20', label: 'less than 20 times.'},
    {value: '20 - 50', label: '20 - 50 times.'},
    {value: '50 - 100', label: '50 - 100 times.'},
    {value: '100 - 150', label: '100 - 150 times.'},
    {value: '> 150', label: 'more than 150 times.'},
];

const interactionDurationOptions = [
    {value: '< 30s', label: 'less than 30 s.'},
    {value: '30 - 60', label: 'between 30s and 60s.'},
    {value: '> 60', label: 'more than 1m.'}
];


const selectOptions = (options) => [{value: '', label: 'Please select…'}, ...options ];

// Gender Age Profession Hand

// Device you use

const SurveyForm = (props) => {
    return (
        <Row>
            <Col md={6} mdOffset={3} xs={10} xsOffset={1}>
                <h1>Pre-Test-Form</h1>
                <hr/>
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
                            value=""
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
                            value=""
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <Select
                            name="hand"
                            label="Are you left or right-handed?"
                            options={selectOptions(handOptions)}
                        />
                    </fieldset>

                    <h4>Smartphone Usage</h4>
                    <hr/>
                    <fieldset>
                        <Select
                            name="smartphone_use"
                            label="Are you a smartphone user?"
                            options={selectOptions(YesNoOptions)}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <Input
                            name="smartphone_model"
                            label="What smartphone model do you use?"
                            help="Example: Apple iPhone 4s"
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <CheckboxGroup
                            name="input_modalities"
                            label="Which input modalities do you use while interacting with the device?"
                            options={inputModalityOptions}
                            value={[]}
                        />
                    </fieldset>
                    <fieldset>
                        <Select
                            name="most_used_input_modality"
                            label="Which of them do you use the most?"
                            options={selectOptions(inputModalityOptions)}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <Select
                            name="device_usage"
                            label="How often do you use the device every day?"
                            options={selectOptions(deviceUsageOptions)}
                            help="Every interaction counts."
                        />
                    </fieldset>
                    <Button type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default SurveyForm;

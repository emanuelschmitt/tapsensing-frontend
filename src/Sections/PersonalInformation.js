import React from 'react';
import { Input, RadioGroup } from 'formsy-react-components';
import SurveyPanel from '../Components/SurveyPanel';

const genderOptions = [
    {value: 'W', label: 'Female'},
    {value: 'M', label: 'Male'}
];

const handOptions = [
    {value: 'Left', label: 'Left Handed'},
    {value: 'Right', label: 'Right Handed'}
];

const PeronalInformation = () => {
    return (
        <SurveyPanel header={"Personal Information"}>
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
                    value=""
                    required
                />
            </fieldset>
            <fieldset>
                <Input
                    name="occupation"
                    label="Current occupation"
                    value=""
                    required
                />
            </fieldset>
            <fieldset>
                <RadioGroup
                    name="hand"
                    label="Are you left or right-handed?"
                    value=""
                    options={handOptions}
                />
            </fieldset>
        </SurveyPanel>
    )
}

export default PeronalInformation;

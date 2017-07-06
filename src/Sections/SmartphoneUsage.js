import React from 'react'
import { Input, Select, CheckboxGroup, RadioGroup } from 'formsy-react-components'

import SurveyPanel from '../Components/SurveyPanel'

const inputModalityOptions = [
    {value: 'Index', label: 'Using the index finger while holding the device in the other hand.'},
    {value: 'Thumb', label: 'Using the thumb while holding the device in the same hand.'},
    {value: 'BothThumb', label: 'Typing with both thumbs while holding the device in both hands.'}
]

const YesNoOptions = [
    {value: true, label: 'Yes'},
    {value: false, label: 'No'}
]

const deviceUsageOptions = [
    {value: '< 20', label: 'less than 20 times.'},
    {value: '20 - 50', label: '20 - 50 times.'},
    {value: '50 - 100', label: '50 - 100 times.'},
    {value: '100 - 150', label: '100 - 150 times.'},
    {value: '> 150', label: 'more than 150 times.'}
]

const selectOptions = (options) => ([
    {value: '', label: 'Please select…'},
  ...options
])

const SmartphoneUsage = (props) => {
  return (
    <SurveyPanel header={'Smartphone Usage'}>
      <fieldset>
        <Select
          name='smartphone_use'
          label='Are you a smartphone user?'
          options={selectOptions(YesNoOptions)}
          value=""
          required
        />
      </fieldset>
      <fieldset>
        <Input
          name='smartphone_model'
          label='What smartphone model do you use?'
          help='Example: Apple iPhone 4s'
          value=""
          required
        />
      </fieldset>
      <fieldset>
        <CheckboxGroup
          name='input_modalities'
          label='Which input modalities do you use while interacting with the device?'
          options={inputModalityOptions}
          value={[]}
          required
        />
      </fieldset>
      <fieldset>
        <RadioGroup
          name='most_used_input_modality'
          label='Which input modality do you use most often?'
          options={inputModalityOptions}
          value=""
          required
        />
      </fieldset>
      <fieldset>
        <RadioGroup
          name='device_usage'
          label='How often do you use the device every day?'
          options={deviceUsageOptions}
          help='Every interaction counts.'
          required
        />
      </fieldset>
    </SurveyPanel>
  )
}

export default SmartphoneUsage

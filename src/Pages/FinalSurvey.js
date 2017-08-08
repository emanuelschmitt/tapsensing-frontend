import React from 'react'
import { Form } from 'formsy-react-components'
import { Row, Col, Button, Grid, Alert } from 'react-bootstrap'

import PersonalInformation from '../Sections/PersonalInformation'
import { postFinalSurveyData } from '../networking'

const layoutOption = 'vertical'

class FinalSurvey extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      submitSuccess: false,
      showAlert: false
    }
  }

  onDataSubmit (data) {
    postFinalSurveyData(data)
        .then((response) => this.setState({
          submitSuccess: true,
          showAlert: true
        }))
        .catch((error) => {
          this.setState({
            submitSuccess: false,
            showAlert: true
          })
          console.log(error)
        })
  }

  renderAlert () {
    if (!this.state.showAlert) {
      return null
    }

    const alertStyle = this.state.submitSuccess
      ? 'success'
      : 'danger'

    const alertText = this.state.submitSuccess
      ? 'Thanks for submitting!'
      : 'Ooops! Something went wrong!'

    return (
      <Alert bsStyle={alertStyle}>
        <strong>{alertText}</strong>
      </Alert>
    )
  }

  renderSubmitButtom () {
    if (this.state.submitSuccess) {
      return null
    }

    return (
      <Button bsClass='btn btn-default btn-large' type='submit'>Submit Data</Button>
    )
  }

  render () {
    return (
      <Grid>
        <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
          <Row>
            <h2>Survey</h2>
            <hr />
            <Form onSubmit={this.onDataSubmit.bind(this)} layout={layoutOption} >
              <PersonalInformation />
              {this.renderAlert()}
              {this.renderSubmitButtom()}
            </Form>
          </Row>
        </Col>
      </Grid>
    )
  }
}

export default FinalSurvey

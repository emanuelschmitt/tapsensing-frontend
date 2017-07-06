const BASE_ENDPOINT_URL = 'http://localhost:8000/api/v1/'
const preTestSurveyEndpoint = BASE_ENDPOINT_URL + 'survey/pretest/'

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const postPreTestSurveyData = (payload) => {
    return fetch(preTestSurveyEndpoint, {
        'method': 'POST',
        'redirect': 'follow',
        'headers': defaultHeaders,
        'body': JSON.stringify(payload)
    })
}

export default postPreTestSurveyData
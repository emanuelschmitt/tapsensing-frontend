const BASE_ENDPOINT_URL = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:8000/api/v1/'
  : 'http://130.149.222.214/api/v1/'

const preTestSurveyEndpoint = BASE_ENDPOINT_URL + 'survey/pretest/'
const statisticsEndpoint = BASE_ENDPOINT_URL + 'statistics/'

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

const getStatistics = () => {
  return fetch(statisticsEndpoint, {
    'method': 'GET',
    'redirect': 'follow',
    'headers': defaultHeaders
  })
}

export {postPreTestSurveyData, getStatistics}

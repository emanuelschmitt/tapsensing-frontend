const BASE_ENDPOINT_URL = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:8000/api/v1/'
  : 'https://api.tapsensing.de/api/v1/'

const surveyEndpoint = BASE_ENDPOINT_URL + 'survey/'
const statisticsEndpoint = BASE_ENDPOINT_URL + 'statistics/'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const postSurveyData = (payload) => {
  return fetch(surveyEndpoint, {
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

export {postSurveyData, getStatistics}

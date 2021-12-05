require('@testing-library/jest-dom')

// I would make the host and url fake just in case a nock is misconfigured and your tests start hitting the real api
process.env.ESG_API_KEY = 'api_key'
process.env.ESG_API_HOST = 'esg-environmental-social-governance-data.p.rapidapi.com'
process.env.ESG_API_URL = 'https://esg-environmental-social-governance-data.p.rapidapi.com'

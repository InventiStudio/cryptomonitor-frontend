const env = process.env.NODE_ENV

const config = {
  development: {
    API_URL: '',
  },
  production: {
    API_URL: '',
  },
  testing: {
    API_URL: '',
  },
}

export default config[env]

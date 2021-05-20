export const environment = {
  production: true,
  mockdata: true,
  endpoints: {
    express: {
      url: `http://localhost:${process.env.DB_PORT || 3000}/api/v1`,
      version: 'v1'
    },
  }

};

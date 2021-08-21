/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const swagger = require('swagger-autogen')();

const output = 'src/docs/swagger_output.json';
const endpoint = ['src/routes/index.ts'];
const doc = {
  host: 'localhost:3333',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'authorization', // name of the header, query parameter or cookie
      description: 'any description...',
    },
  },
};

swagger(output, endpoint, doc);

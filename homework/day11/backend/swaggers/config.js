export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: '미니프로젝트 API 설명서!!',
        version: '1.0.0',
      },
    },
    apis: ['./swaggers/*.swagger.js'], // files containing annotations as above
  };
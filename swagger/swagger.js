const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })

const outputFile = './swagger_output.json'
const endpointsFiles = ['../router/foodMenue.js']

const swaggerDocument = {
    info: {
        version: "1.0.0",
        title: "Todo Apis",
        description: "API for Managing todo calls",
        contact: {
            name: "API Support",
            email: "shrihariharanba@live.com",
        },
    },
    host: "localhost:3003",
    basePath: "/data",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} },
    tags: [
        {
            name: "TODO CRUD",
            description: "TODO related apis",
        },
        {
            name: "Todo",
            description: "Todo App",
        },
    ],
    securityDefinitions: {},
        definitions: {
            todoResponse: {
                code: 200,
                message: "Success",
            },
            "errorResponse.400": {
                code: 400,
                message:
                    "The request was malformed or invalid. Please check the request parameters.",
            },
            "errorResponse.401": {
                code: 401,
                message: "Authentication failed or user lacks proper authorization.",
            },
            "errorResponse.403": {
                code: 403,
                message: "You do not have permission to access this resource.",
            },
            "errorResponse.404": {
                code: 404,
                message: "The requested resource could not be found on the server.",
            },
            "errorResponse.500": {
                code: 500,
                message:
                    "An unexpected error occurred on the server. Please try again later.",
            },
        },
    };

    swaggerAutogen(outputFile, endpointsFiles, swaggerDocument)
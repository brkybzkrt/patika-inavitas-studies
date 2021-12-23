const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Tracker Project",
            version: "0.0.1",
            description:
                "Tracer of the vehicle status",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            }
        },
         schemes: ["http"],
         consumes: ["application/json"],
         produces: ["application/json"],
        servers: [
            {
                url: "http://localhost:3099",
            },
        ],
    },
    apis: ["./routes/*.js"], 
};

const specs = swaggerJsDoc(options);


exports.swagServe = swaggerUi.serve
exports.swagSetup = swaggerUi.setup(specs)
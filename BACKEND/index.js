// Import of Modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
//const swaggerDoc = require(FILE_NAME_OF_SWAGGER_DOC);

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

// DB CONNECTION:
const port = process.env.PORT;
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI)
    .then((res) => app.listen(port, () => {
        console.log(`Successfully Connected to Database. Server is listening on port ${port}`);
    }))
    .catch((err) => {
        console.log("Failed to establish connection to the Database.");
        console.error(err); // For Debugging Purposes
    });

// ROUTERS:

// ROUTES:

// SWAGGER UI DOCS ROUTE:
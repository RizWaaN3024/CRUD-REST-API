import express from 'express';
import bodyParser from 'body-parser';

// Initialize express application
const app = express(); 
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// make the application listen for incoming requests

app.listen(PORT, () => {
    console.log(`server is running on port: http://localhost:${PORT}`)
})
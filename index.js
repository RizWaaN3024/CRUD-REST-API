import express from 'express';
import bodyParser from 'body-parser';

import UsersRoutes from './routes/users.js';

// Initialize express application
const app = express(); 
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

app.use('/users', UsersRoutes)

// Create a route
app.get("/", (req, res) => {
    res.send("Hello From Homepage")
})

// make the application listen for incoming requests
app.listen(PORT, () => {
    console.log(`server is running on port: http://localhost:${PORT}`)
})
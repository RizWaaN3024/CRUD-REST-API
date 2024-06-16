import express from "express";

// using router
const router = express.Router();

const users = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 25
    }
]

// all routes here are starting with /users 
router.get('/', (req, res) => {
    res.send("Hello From userRoute")
})

export default router;

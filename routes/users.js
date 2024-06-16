import express from "express";
import { v4 as uuidv4 } from 'uuid';


// using router
const router = express.Router();

const users = [];

// all routes here are starting with /users 
router.get('/', (req, res) => {
    res.send(users)
})

router.post("/", (req, res) => {
    const user = req.body;

    const userId = uuidv4();

    const userWithId = {...user, id: userId};

    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the database`)

})

// dynamic routing

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
})

export default router;

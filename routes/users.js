import express from "express";
import { v4 as uuidv4 } from 'uuid';


// using router
const router = express.Router();

let users = [];

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

// route for deleting users
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`User with the id:${id} deleted successfully`);
})

// TO completely overwrite something we use the PUT method
// To partially update an existing user we use the PATCH method
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) {
        user.firstName = firstName;
    }
    if(lastName) {
        user.lastName = lastName;
    }
    if(age) {
        user.age = age;
    }
    res.send(`User with the id: ${id} has been updated`)
})

export default router;

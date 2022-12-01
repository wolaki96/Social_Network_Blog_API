const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
} = require('../../controllers/userController');
//connect to user route to create a user or see all users
router.route('/').get(getUsers).post(createUser);

//connect to user route to get one user
router.route('/:userId').get(getOneUser);




module.exports = router;
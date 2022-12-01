const { Comment, User } = require('../models');

module.exports = {
    //get all the users and their usernames
    getUsers(req, res) {
        User.find()
        .then((user) => res.status(200).json(users))
        .catch((err)=> res.status(500).json(err));
        
            },
    //get one user
    getOneUser(req, res) {
        User.find()
    }
      
      
      
      
        }


    
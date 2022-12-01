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
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .populate('replies')
        .populate('friends')
        .then((user)=> {
            if (!user) {
                res.status(404).json({message: "No username is found with this ID."});
                return;
            }
            res.json(user);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
    },

    
      
      
      
      
        }


    
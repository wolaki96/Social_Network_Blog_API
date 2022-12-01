const { Comment, User } = require('../models');

module.exports = {
    //get all the users and their usernames
    getUsers(req, res) {
        User.find()
            .then((users) => res.status(200).json(users))
            .catch((err) => res.status(500).json(err));

    },
    //get one user
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('comment')
            .populate('friends')
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: "No username is found with this ID." });
                    return;
                }
                res.json(user);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    },

    //create a user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

deleteUser(req, res) {
    User.findOneAndDelete({_id: req.params.userId})
    .then((user) =>
    !user
      ? res.status(404).json({ message: 'No user found' })
      : Comment.deleteMany({ _id: { $in: user.comments } })
  )
  .then(() => res.status(200).json({ message: 'User deleted!' }))
  .catch((err) => res.status(500).json(err));
},

// adding a friend to the user's friend list
addFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.user },
        { $addToSet: { friends: req.body} },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    
}



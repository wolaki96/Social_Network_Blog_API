const { Comment, User } = require('../models');

// get all the comments
module.exports = {
    getComment(req, res) {
      Comment.find()
        .then((comment) => res.json(comment))
        .catch((err) => res.status(500).json(err));
    },
    // Getting a single comment
    getSingleComment(req, res) {
      Comment.findOne({ _id: req.params.commentId })
        .select('-__v')
        .then((comment) =>
          !comment
            ? res.status(404).json({ message: 'No comment with that ID has been found :(' })
            : res.json(comment)
        )
        .catch((err) => res.status(500).json(err));
    },
    //creating a comment
    createComment(req, res) {
        Comment.create(req.body)
          .then((comment) => res.json(comment))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
    // updating a comment 
    updateComment(req, res) {
        Comment.findOneAndUpdate(
          { _id: req.params.commentId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((comment) =>
            !comment
              ? res.status(404).json({ message: 'No comments found with this id!' })
              : res.json(comment)
          )
          .catch((err) => res.status(500).json(err));
      },

}
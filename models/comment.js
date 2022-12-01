const { Schema, model } = require('mongoose');

//schema to create a comment
const commentSchema= new Schema(
    {
        commentText:{
            type: String,
            required: true,
            max: 280
        },
        createdAt:{
            type: Date,
            default: Date.now
            },
        username: {
                type: String,
                required: true
        },
        replies: [replySchema],
    },
    {
    toJSON: {
        getters: true
    },
    id: false
    }
)
const Comment = model('comment', commentSchema);

module.exports = Comment;
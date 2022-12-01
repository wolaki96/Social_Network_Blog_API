const { Schema, model, Types } = require('mongoose');
const userSchema = require('./user');

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
        getters: true,
        virtuals: true
    },
    id: false
    }
)
commentSchema.virtual('replyCount').get(function (){
    return this.replies.length;
});

//creating a reaction/reply schema

const replySchema = new Schema(
    {
    replyId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    replyBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: 
    }
    }
)

const Comment = model('comment', commentSchema);

module.exports = Comment;
const { Schema, model } = require('mongoose');
const commentSchema = require('./comment');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        comments: [commentSchema],
        friends: [userSchema]
    },
    {
    toJSON: {
        virtuals: true,
    }
}
);

const User = model('user', userSchema);

module.exports = User;
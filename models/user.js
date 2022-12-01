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
        comments: [{ type: Schema.Types.ObjectId, ref: 'comment'}],
        friends: [userSchema]
    },
    {
    toJSON: {
        virtuals: true,
    }
}
);
userSchema.virtual('friendsList').get(function (){
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
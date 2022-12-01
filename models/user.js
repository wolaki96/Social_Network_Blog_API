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
        comment: [{ type: Schema.Types.ObjectId, ref: 'comment'}],
        friends: [{ type: Schema.Types.ObjectId, ref: 'user'}]
    },
    {
    id:false,
    }
);
userSchema.virtual('friendsList').get(function (){
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
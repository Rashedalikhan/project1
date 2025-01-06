const {model, Schema} = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    prise: {
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    rattings: {
        type: Number,
        required: true,
    },
});

const Post = new model('Post', postSchema);

module.exports = Post;
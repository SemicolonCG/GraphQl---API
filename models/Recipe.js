const {model ,schema, Schema } = require('mongoose');

const recipeSchema = new Schema({
    name: String,
    description: String,
    createdAt: String,
    thumbsUp: Number,
    thumbsDown: Number
});

model.exports = model('Recipe' , recipeSchema);
const { model, Schema } = require('mongoose')

const fruitSchema = new Schema({
    name: String,
    description: String,
    amount: Number,
    limit: Number,
    isActive: Boolean,
    createdAt: String,
    updatedAt: String


})

module.exports = model('Fruit', fruitSchema)
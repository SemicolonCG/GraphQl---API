const { gql } = require('apollo-server')

module.exports = gql`
type Fruit {
    name: String
    description: String
    amount: Int
    limit: Int
    forceDelete: Boolean
    createdAt: String
    updatedAt: String
}

type Query {
 
    findFruit(name: String): Fruit!
}

type Mutation {

    storeFruitToFruitStorage(name: String, amount: Int): Fruit!
    removeFruitFromFruitStorage(name: String, amount: Int): Boolean
    createFruitForFruitStorage(name: String, description: String, limit: Int): Fruit!
    updateFruitForFruitStorage(name: String, description: String, limit: Int): Fruit!
    deleteFruitFromFruitStorage(name: String, forceDelete: Boolean): Boolean
}
`
const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")

const MONGODB = "mongodb+srv://dasuneranda:PLSwWuWoq3aKqkUl@cluster0.l0isxqz.mongodb.net/?retryWrites=true&w=majority"

const typeDefs = require("./shared/graphql/typeDefs")
const resolvers = require("./shared/graphql/resolvers")

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB)
    .then(() => {
        console.log("MongoDB Connection successful")
        return server.listen({ port: 5000 })
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });

const {ApolloServer, gql} = require("apollo-server")

// String, Int, Float, Boolean

const typeDefs = gql`
    type Query {
        hello: String!
        hello2: [String!]
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return "World!"
        },
        hello2: () => {
            return ["Hello", "my", "Friend"]
        },
        numberOfAnimals: () => {
            return 55;
        },
        price: () => {
            return 2344654.4654
        },
        isCool: () => {
            return true
        }
    }
}

const server = new ApolloServer(
    {
        typeDefs,
        resolvers
    }
);

server.listen().then(({url}) => {
    console.log("Server is ready at " + url)
})
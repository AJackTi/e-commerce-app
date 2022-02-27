const {gql} = require("apollo-server");
exports.typeDefs = gql`
    type Query {
        hello: String
        product(id: ID!): Product
        products: [Product!]!
        category(id: ID!): Category
        categories: [Category!]!
    }

    type Product {
        id: String!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category
    }

    type Category {
        id: String!
        name: String!
        products: [Product!]!
    }
`
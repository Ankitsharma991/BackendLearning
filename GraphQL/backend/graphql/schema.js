const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type Post {
         _id: ID!
         title: String!
         content: String!
         imageUrl: String!
         creator: User!
         createdAt: String!
         updatedAt: String!
    }

    type User{
        _id: ID!
        name: String!
        email: String!
        password: String!
        status: String!
        posts: [Post!]!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    type PostData {
        posts: [Post!]!
        totalPosts: It!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type RootQuery{
        login(email: String!, password: String!): AuthData!
        posts(page: Int!): PostData!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    schema{
        query: RootQuery
        query: RootMutation
    },
    
`);

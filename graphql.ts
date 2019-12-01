// graphql.js
const typeDefs = require('/schema/index.graphql');


const { ApolloServer } = require('apollo-server-lambda');

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();

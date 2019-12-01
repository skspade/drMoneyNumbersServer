import * as resolvers from './resolvers'
import {ApolloServer} from 'apollo-server-lambda'
const typeDefs = require('./schema/index.graphql');

const server = new ApolloServer({ typeDefs, resolvers,playground:true  });

exports.graphqlHandler = server.createHandler();

const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");
const resolvers = require("./resolvers");

const typeDefs = readFileSync("./schema.graphql", "utf-8");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running on ${url}`);
});

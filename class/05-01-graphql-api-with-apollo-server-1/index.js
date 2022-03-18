import { ApolloServer, gql } from 'apollo-server'



const myResolvers = {
    Query: {
      hello: () => 'world',
    },
  };


const myTypeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;




const server = new ApolloServer({
    typeDefs: myTypeDefs,
    resolvers: myResolvers
})


server.listen(3000)
import { ApolloServer, gql } from 'apollo-server';

// The GraphQL schema
const typeDefs = gql`
input CreateBoardInput{
  writer: String
  title: String
  contents: String
}

type BoardReturn{
    number:Int
    writer: String
    title: String
    contents: String
  }
  type Query {
    # fetchBoards:[BoardReturn] 객체 한개를 의미
    fetchBoards:[BoardReturn] # => 배열 안에 객체 1개 이상을 의미
  }

  type Mutation{
    createBoard(writer:String,title:String,contents:String): String
    createBoard2(CreateBoardInput: CreateBoardInput): String
      
  }

  
`;

const resolvers = {
  Query: {
    fetchBoards: () => {
      const result = [
        { number: 1, writer: "철수", title: "제목입니다~~~", contents: "내용이에요!!!" },
        { number: 2, writer: "영희", title: "좋은 날씨입니다!", contents: "내용@@@@@" },
        { number: 3, writer: "훈이", title: "점심 맛있게 드셨나요?!", contents: "식사 하셨나요?!" },
        { number: 4, writer: "맹구", title: "안녕하세요?!", contents: "내용이요!!!" }
    ]


    return result
  },
},
  Mutation: {
    createBoard: (_, args) => {
      console.log(args)
  },
    createBoard2: (_, args) => {
      console.log(args)
},
},
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
const express = require('express')
const app = express()

// 객체를 스트링으로 바꾸는건 JSON.stringify()
// 객체를 숫자로 바꾸는게 JSON.parse


// app을 요청할때 JSON으로 변경
app.use(express.json())
// 게시판 조회 부분
app.get('/boards', (req, res) => {
//1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
// 행을 row, 열을 column이라고 한다.
// 데이터를 가져왔다고 생각하고

  const result = [
  {number:1,writer:"철수",title:"제목",contents:"내용이에요"} ,
  {number:2,writer:"영희",title:"영희제목",contents:"영희내용이에요"} ,
  {number:3,writer:"훈이",title:"훈이제목",contents:"훈이내용이에요"} ,
]


//2. 꺼내온 결과 응답주기
res.send(result)
// 프론트가 요청한 result값을 response해준다.
})

app.post('/boards', (req, res) => {
// 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
// 프론트엔드로부터 데이터받아오기
// 콘솔로 찍어서 확인 해보기.

  console.log(req.body)

// 2. 저장결과 알려주기!!
res.send('게시판 등록에 성공하였습니다!!')
})

// app.get('/boards/:id', (req, res) => {
//   // /부분 뒤에 boards를 붙인다.
//   // 게시판 항목
//     console.log(req)
//   res.send('Hello World!')
// })

// app.put('/boards', (req, res) => {
//   console.log(req)
// res.send('Hello World!')
// })

// app.delete('/boards', (req, res) => {
//   console.log(req)
// res.send('Hello World!')
// })

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})
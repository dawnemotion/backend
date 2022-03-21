import express from "express"
import {checkValidationPhone,getToken,sendToSms} from './phone.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import dotenv from 'dotenv'
// index.js에 설치후 임포트
dotenv.config()
// dotenv.config를 설치하면 process.env 명령어를 사용가능하다.




const openapiSpecification = swaggerJsdoc(options);
const port = 3000
const app = express();
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.get('/boards', (req, res) => {
  //1. 데이터를 조회하는 로직 => db에 접속해서 데이터 꺼내오기
  const result = [
    { number: 1, name:"철수", title:"제목입니다~~", contents:"내용이에요~~" },
    { number: 2, name:"영희", title:"영희제목입니다~~", contents:"영희내용이에요~~" },
    { number: 3, name:"훈이", title:"훈이제목입니다~~", contents:"훈이내용이에요~~" },
  ]

  // 2. 꺼내온 결과 응답주기
  res.send(result)
})

app.post('/boards', (req, res) => {
   //1. 데이터를 등록하는 로직 => db에 접속해서 데이터 저장오기
  // 프론트엔드로부터 데이터를 받아오기 
  // 콘솔로 찍어서 확인해보기
  console.log(req.body)
  // 2. 저장 결과 알려주기
  res.send('등록에 성공하였습니다.')
})

app.post('/tokens/phone', (req, res)=>{
  const myphone = req.body.phone
  const isValid = checkValidationPhone(myphone)
    if(isValid){
        // 2. 핸드폰 토큰 6자리 만들기
        const token = getToken()
        // 3. 핸드폰으로 토큰 전송하기
        sendToSms(myphone,token)
        res.send("인증완료")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

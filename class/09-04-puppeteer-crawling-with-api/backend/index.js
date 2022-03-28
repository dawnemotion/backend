import express from "express"
import {checkValidationPhone,getToken,sendToSms} from './phone.js'
import { checkValidationEmail,getWelcomeTemplate, sendToEmail } from './user.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Board } from "./models/board.model.js"
import { Stock } from "./models/stock.model.js"


// index.js에 설치후 임포트
dotenv.config()
// dotenv.config를 설치하면 process.env 명령어를 사용가능하다.

const port = 3001
const app = express();
app.use(express.json())

app.get('/boards', async (req, res) => {
  //1. 데이터를 조회하는 로직 => db에 접속해서 데이터 꺼내오기
  
  
  const result = await Board.find({writer:"철수"}) // Board.fine()
  
  // 2. 꺼내온 결과 응답주기
  res.send(result)
})

app.post('/boards', async (req, res) => {
   //1. 데이터를 등록하는 로직 => db에 접속해서 데이터 저장오기
  // 프론트엔드로부터 데이터를 받아오기 
  // 콘솔로 찍어서 확인해보기
  const board = new Board({
    // writer: req.body.writer,
    // title: req.body.title,
    // contents: req.body.contents
    ...req.body
  })
  await board.save()

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

app.get("/stocks", (req, res)=>{
  const stocks = await Stock.find()

  res.send(stocks)
})

// 
app.post('/users', (req,res) => {
  const myuser = req.body.user
  const isValid = checkValidationEmail(myuser.email)
  if(isValid){
      // 2. 가입환영 템플릿 만들기
      const template = getWelcomeTemplate(myuser)
      // 3. 이메일에 가입환영 템플릿 전송하기
      sendToEmail(myuser.email,template)
  }
})

// 몽고DB 접속!!
mongoose.connect("mongodb://my-database:27017/sejin")

// Backend API 서버 오픈!!(리슨)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

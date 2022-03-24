import express from "express"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { checkValidationPhone,getToken,sendToSms } from './phone.js'
import { checkValidationEmail,getWelcomeTemplate, sendToEmail } from './user.js'
import { Board } from "./models/board.model.js"
import { Phone } from "./models/token.model.js"
const port = 3001
const app = express();
dotenv.config()
app.use(express.json())
app.get('/boards', async (req, res) => {
  //1. 데이터를 조회하는 로직 => db에 접속해서 데이터 꺼내오기
  
  const result = await Board.find() // Board.fine()
  
  // 2. 꺼내온 결과 응답주기
  res.send(result)
})

app.post('/boards', async (req, res) => {
   //1. 데이터를 등록하는 로직 => db에 접속해서 데이터 저장오기
  const board = new Board({...req.body})
  
  await board.save()
  // 2. 저장 결과 알려주기
  res.send('등록에 성공하였습니다.')
})

app.post('/tokens/phone', async (req, res)=>{
  const phone = req.body.phone;

  let saved = await Phone.findOne({ phone: `${phone}` }).exec();
  if (saved === null) {
    saved = "empty";
  }
  
  const isValid = checkValidationPhone(phone)
    if(isValid){
        // 2. 핸드폰 토큰 6자리 만들기
        const token = getToken()
        // 3. 핸드폰으로 토큰 전송하기
        sendToSms(phone,token)
        
          if (phone !== saved.phone) {
            // 입력받은 핸드폰번호와 저장된 핸드폰번호가 같지않으면 === 처음 인증을 받는다
            const myphone = new Phone({token: token, phone: `${phone}`,isAuth: false});
            // 새로운 정보를 만들어 저장한다
            await myphone.save();

            res.send("인증완료!");
          } else {

            res.send("인증번호가 변경되었습니다.!");
            // 입력받은 핸드폰 번호와 저장된 핸드폰 번호가 같으면 === 다시 인증받는다
            await Phone.updateOne({ phone: `${phone}` }, { token: token });
            // 토큰을 다시 만들어 알려준다.
          }
    }
});

app.patch("/tokens/phone", async (req, res) => {
  const myphone = req.body.myphone;
  const token = req.body.token;
  let already = await Phone.findOne({ phone: `${myphone}` }).exec();
  if (already === null) {
    already = "empty";
  }
  if (myphone !== already.phone || token !== already.token) {
    res.send("false");
  } else {
    await Phone.updateOne({ phone: `${myphone}`}, { isAuth: true });
    res.send("true");
  }
});

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
mongoose.connect("mongodb://my-database:27017/Token")

// Backend API 서버 오픈!!(리슨)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

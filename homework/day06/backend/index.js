import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swaggers/config.js"
import cors from 'cors'
import dotenv from 'dotenv'
import {checkValidationPhone,getToken,sendToSms} from './phone.js'
import {checkValidationEmail,getWelcomeTemplate,sendToEmail} from './user.js'

dotenv.config()
const app = express();
// app이 app.use보다 상위에 위치해있어야한다. 위에서부터 아래로 연산하기때문에.
app.use(cors())
app.use(express.json());
// app을 요청할때 JSON으로 변경
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
// const express = require('express')
// import를 했기 떄문에 따로 사용하지 않는다.

app.get("/users", function (req, res) {
  // get()이 부분은 메소드 부분이고
  // ('/') 이 부분은 엔드포인트이다.
  const result = [
    {
      email: "nextdodream@gmail.com",
      name: "정세진",
      phone: "01012345678",
      personal: "123456-7891011",
      prefer: "https://google.com",
    },
    {
      email: "nextdodream@gmail.com",
      name: "정이진",
      phone: "01012345678",
      personal: "123456-7891011",
      prefer: "https://google.com",
    },
    {
      email: "nextdodream@gmail.com",
      name: "정삼진",
      phone: "01012345678",
      personal: "123456-7891011",
      prefer: "https://google.com",
    },
    {
      email: "nextdodream@gmail.com",
      name: "정사진",
      phone: "01012345678",
      personal: "123456-7891011",
      prefer: "https://google.com",
    },
    {
      email: "nextdodream@gmail.com",
      name: "정오진",
      phone: "01012345678",
      personal: "123456-7891011",
      prefer: "https://google.com",
    },
  ];
  res.send(result);
});

app.get("/starbucks", function (req, res) {
  const coffee = [
    { name: "아메리카노", kcal: 10 },
    { name: "카페라떼", kcal: 9 },
    { name: "카라멜마끼아또", kcal: 8 },
    { name: "내가만든커피", kcal: 7 },
    { name: "우유", kcal: 6 },
    { name: "아이스아메리카노", kcal: 5 },
    { name: "콜라", kcal: 4 },
    { name: "사이다", kcal: 3 },
    { name: "망고쥬스", kcal: 2 },
    { name: "플레인요구르트", kcal: 1 },
  ];
  res.send(coffee);
});

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

app.post('/users', (req,res) => {
  const myuser = req.body.user
  const isValid = checkValidationEmail(myuser.jEmail)
  if(isValid){
      // 2. 가입환영 템플릿 만들기
      const template = getWelcomeTemplate(myuser)
      // 3. 이메일에 가입환영 템플릿 전송하기
      sendToEmail(myuser.jEmail,template)
  }
})


app.listen(3000);

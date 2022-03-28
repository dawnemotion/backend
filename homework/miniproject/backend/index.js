import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swaggers/config.js"
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { checkValidationPhone, getToken, sendToSms } from './phone.js'
import { checkValidationEmail, getWelcomeTemplate, sendToEmail } from './user.js'
import { site } from './site.js' 
import { Token } from './models/token.model.js'
import { Profile } from './models/user.model.js'
import { CoffeeList } from './models/coffeList.js'
import { peopleNumber } from './personal.js'

// env파일 설정
dotenv.config()
// express 이용
const app = express();
// cors 사용
app.use(cors())
// json파일형식사용
app.use(express.json());
// swagger설명서사용
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));


// 1. 핸드폰인증번호 보내기API
app.post('/tokens/phone', async (req, res)=>{
  // 전달받은 핸드폰의 정보
    const phoneNumber = req.body.phone
  // 핸드폰유효성검사
    let token
    const isValid = checkValidationPhone(phoneNumber)
      if(isValid){
          // 2. 핸드폰 인증번호 6자리 만들기
          token = getToken()
          // 3. 핸드폰으로 토큰 전송하기
          sendToSms(phoneNumber,token)
      }
      // 토큰중복검사
      // 입력칸에서 입력받은 핸드폰번호가 DB에 있는지 확인
      const isHavedNumber = await Token.findOne({phone:phoneNumber})
      // DB에 입력된 핸드폰번호가 없거나 입력받은 핸드폰번호와 DB에 저장된 핸드폰번호가 다른경우
      if(isHavedNumber === null || isHavedNumber.phone !== phoneNumber){
      // 입력받은 핸드폰 번호와 발송된 인증번호를 저장
        const newNumber = new Token({token:token, phone:phoneNumber, isAuth: false})
        await newNumber.save()
        res.send("인증번호 발송완료!!");
      //입력받은 핸드폰번호와 DB에 저장된 핸드폰번호가 같은경우 새로 발급된 인증번호만 갱신
      } else {
        await Token.updateOne({phone:phoneNumber},{token:token});
        res.send("인증번호가 재발송되었습니다!");
      }
  });

  // 2. 인증번호 검증API
  app.patch('/tokens/phone', async (req,res) => {
    // 입력받은 핸드폰번호와 인증번호
    const enteredPhoneNumber = req.body.phone
    const phoneToken = req.body.token
    // 입력받은 핸드폰 번호로 찾은 정보
    const searchPhone = await Token.findOne({Token:enteredPhoneNumber})
    // 그 정보 속의 핸드폰 번호
    const phoneNumber = searchPhone.phone
    // 입력받은 핸드폰번호로 검색한 핸드폰정보가 없거나 입력한 번호와 저장된 핸드폰번호가 다를경우
    if(searchPhone === null || phoneNumber !== enteredPhoneNumber){
      res.send('false') 
      console.log('인증번호를 요청한 휴대폰 번호와 일치하지않습니다.')
    // 입력받은 인증번호와 DB에 저장된 인증번호가 다른경우
    }else if(searchPhone.token !== phoneToken){
      res.send('false')
      console.log("인증번호가 일치하지 않습니다.")
    // 핸드폰번호와 인증번호가 일치할 경우 isAuth를 true로 변경(인증완료)
    }else if(searchPhone.isAuth === false){
      await Token.updateOne({token:phoneToken}, {isAuth: true})
      console.log("인증되었습니다.")
      res.send('true')
    // 핸드폰번호와 인증번호가 일치하고 isAuth가 true인 경우(인증완료가 되었는데 재차 인증요청시)
      return true
    }else{
      console.log("이미 인증되었습니다.")
      res.send("이미 인증되었습니다.")
      return true
    }
  })
  

// 3. 회원가입API
app.post("/user", async (req, res) => {
  // 유저정보
  const user = req.body
  const name = req.body.name
  const email = req.body.email
  const prefer = req.body.prefer
  const pwd = req.body.pwd
  const phone = req.body.phone
   // 주민등록번호 뒷자리 마스킹처리
   const personal = peopleNumber(req.body.personal);
  // 핸드폰번호로 DB검색
  const inquireNumber = await Token.findOne({phone:phone})
  // 입력받은 핸드폰번호로 DB에 검색했을때 정보가 없거나 isAuth가 false인 경우
  if(inquireNumber === null || inquireNumber.isAuth === false){
    res.status(422).send('에러!! 핸드폰 번호가 인증되지 않았습니다!');
    console.log("휴대폰 번호 인증부터 진행해주세요!")
  // 입력한 번호가 있고 isAuth가 true인 경우(인증번호가 인증이 된 경우)
  }else{
    // 입력한 사이트를 스크래핑
    const getOg = await site(prefer)
    // 스크래핑한 사이트와 입력받은 프로필저장
    const getProfile = await new Profile({
      name:name, email:email,personal:personal, prefer:prefer,
      pwd:pwd, phone:phone, og:getOg})
    // DB에 저장
    await getProfile.save()
    
    // 회원가입 이메일 전송
    const isValid = checkValidationEmail(email)
    if(isValid){
    // 2. 가입환영 템플릿 만들기
      const template = getWelcomeTemplate(user)
    // 3. 이메일에 가입환영 템플릿 전송하기
      const send = await sendToEmail(name, email, template)
    // 결과창에 ID값 반환
      res.send(getProfile._id)
    }  
  }
});

// 회원목록조회API
app.get("/users", async(req, res)=> {
  // DB에 저장된 프로필의 목록
  const profileList = await Profile.find()

  // DB결과값 반환
  res.send(profileList);
});

// 커피목록조회API
app.get('/starbucks', async (req,res)=>{
  // DB에 저장된 커피목록
  const coffeList = await CoffeeList.find()

  // DB결과값 반환
  res.send(coffeList);
})

// mongodb connect
mongoose.connect("mongodb://my-database:27017/miniproject")


app.listen(3000);

import {checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'

// const express = require('express')
import express from 'express'
// import swaggerUi from 'swagger-ui-express'
// import swaggerJsdoc from 'swagger-jsdoc'
// import { options } from './swagger/config.js'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

/**
 * @openapi
 * /boards:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/boards', (req, res) => {

  const result = [
  {number:1,writer:"철수",title:"제목",contents:"내용이에요"} ,
  {number:2,writer:"영희",title:"영희제목",contents:"영희내용이에요"} ,
  {number:3,writer:"훈이",title:"훈이제목",contents:"훈이내용이에요"} ,
]


res.send(result)

})

app.post('/boards', (req, res) => {

  console.log(req.body)

res.send('게시판 등록에 성공하였습니다!!')
})



app.post('/tokens/phone', (req, res) =>{
  console.log(req.body)
  const myphone = req.body.myphone
  const isValid = checkValidationPhone(myphone)
  if(isValid){

      const result = getToken(myphone)

      sendTokenToSMS(myphone, result)
      res.send("인증완료!!")
  }
})
// console.log(myphone)
// console.log(req)




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
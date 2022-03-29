import { getToday } from "./createDate.js"
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export class UserMailService{
// 1. 이메일이 정상인지 확인(1.존재여부, 2-"@" 포함여부)
    checkValidationEmail = (mailaddress) => {
        const mail = mailaddress.includes("@")
        const mail2 = mailaddress.includes("com")
        if(mail !== true && mail2 !== true){
            console.log("이메일형식이 옳지 않습니다")
            return false
        }else{
            return true
        }
    }
    // 2. 가입환영 템플릿 만들기

    getWelcomeTemplate = (user) => {
        // 받은 데이터 구조분해할당
        const {name, personal, phone, prefer, pwd, email } = user
        // 템플릿 내용부분
        return `
            <html>
                <body>
                    <h1>${name}님 가입을 환영합니다!!!</h1>
                    <hr />
                    <div>이름: ${name}</div>
                    <div>이메일: ${email}</div>
                    <div>주민등록번호: ${personal.split("").fill("*",-7).join("")}</div>
                    <div>핸드폰번호: ${phone}</div>
                    <div style="color:red">좋아하는사이트: ${prefer}</div>
                    <div>비밀번호: ${pwd}</div>
                    <div>가입일: ${getToday()}</div>
                </body>
            </html>
        `
    
    
    }
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendToEmail = async (name, email, template) => {
        const appKey = process.env.EMAIL_APP_KEY
        const xSecretKey = process.env.EMAIL_X_SECRET_KEY
        const sender = process.env.EMAIL_SENDER
        const result = await axios.post(`https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail/`,{
            senderAddress: sender,
            title: `안녕하세요 ${name}님. 가입을 환영합니다`,
            body: template,
            receiverList:[
                {
                    receiveMailAddr: email,
                    receiveType: "MRT0"
                }
            ]
        },
        {
            headers:{
                "Content-Type": "application/json;charset=UTF-8",
                "X-Secret-Key": xSecretKey
            }
        }
        
    )
    console.log(email)
    console.log(result)  
}
}
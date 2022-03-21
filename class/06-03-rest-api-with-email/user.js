import { getToday } from "./createDate.js"
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
// 1. 이메일이 정상인지 확인(1.존재여부, 2-"@" 포함여부)
    export const checkValidationEmail = (aaa) => {
        const mail = aaa.includes("@")
        const mail2 = aaa.includes("com")
        if(mail !== true && mail2 !== true){
            console.log("이메일형식이 옳지 않습니다")
            return false
        }else{
            return true
        }
    }
    // 2. 가입환영 템플릿 만들기

    export const getWelcomeTemplate = (user) => {
    
        const {name, age, school, email, password} = user

        return `
            <html>
                <body>
                    <h1>${email}님 가입을 환영합니다!!!</h1>
                    <hr />
                    <div>이름: ${name}</div>
                    <div>나이: ${age}</div>
                    <div>학교: ${school}</div>
                    <div>비밀번호: ${password}</div>
                    <div>가입일: ${getToday()}</div>
                </body>
            </html>
        `
    
    
    }
    // 3. 이메일에 가입환영 템플릿 전송하기
    export const sendToEmail = async (email,template) => {

        const appKey = process.env.EMAIL_APP_KEY
        const xSecretKey = process.env.EMAIL_X_SECRET_KEY
        const sender = process.env.EMAIL_SENDER
        // 보낼 아이디 주소 임의 작성가능 도메인은 내가 구입한 도메인주소로 해보자.
        const result = await axios.post(`https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail/`,{
            senderAddress: sender,
            title: "안녕하세요 철수님. 가입을 환영합니다",
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
    console.log(result)
    console.log("전송완료")
}
ß
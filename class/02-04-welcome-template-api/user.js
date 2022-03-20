import { getToday } from "./createDate.js"

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
    export const sendToEmail = (email,template) => {
        console.log(`${email}으로 인증번호 ${template}를 보냈습니다.`)
}

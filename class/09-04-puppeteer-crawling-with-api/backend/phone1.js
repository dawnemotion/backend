import axios from "axios"

export const checkValidationPhone = (myphone) => {
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log("에러발생!!! 핸드폰 번호를 제대로 입력해주세요!!")
        return false
    }else{
        return true
    }

}

export const getToken = () => {
    const count = 6;
    const result = String(Math.floor(Math.random() * 10**count)).padStart(count,"0")
    return result
}


export const sendToSms = async (myphone,result) => {
        const appKey = process.env.SMS_APP_KEY
        const xSecretKey = process.env.SMS_X_SECRET_KEY
        const sender = process.env.SMS_SENDER

        const sms = await axios.post(`https://api-sms.cloud.toast.com/sms/v3.0/appKeys/${appKey}/sender/sms`, {
            body:`안녕하세요. 인증번호는 ${result}입니다.`,
            sendNo:sender,
            // 보내는 사람 nhncloud에서 인증된 번호
            recipientList:[
                { internationalRecipientNo: myphone}
            ]
            // 대괄호 형식 이라 안에 중괄호를 넣어준다.
            // 이 부분에는 받는 사람이 포함된다
        },{
            headers:{
                "Content-Type": "application/json;charset=UTF-8",
                "X-Secret-Key": xSecretKey
                // 이름에 - 가 들어가서 문자열 형태로 감싸주어야한다.
                // 시크릿키는 nhn서비스에 나와있다.
            }
        })
        console.log(sms)
        console.log("전송 끝!!")
        // console.log(`${myphone}으로 인증번호 ${result}를 보냈습니다.`)
}

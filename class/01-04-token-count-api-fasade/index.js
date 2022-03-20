console.log("안녕하세요");

const checkValidationPhone = (myphone) => {
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log("에러발생!!! 핸드폰 번호를 제대로 입력해주세요!!")
        return false
    }else{
        return true
    }

}

const getToken = () => {
    const count = 6;
    const result = String(Math.floor(Math.random() * 10**count)).padStart(count,"0")
    return result
}


const sendToSms = (myphone,result) => {
        console.log(`${myphone}으로 인증번호 ${result}를 보냈습니다.`)
}

// 핸드폰 토큰 생성하는 api
const createTokenOfPhone = (myphone) => {
    // 1.핸드폰 자릿수 확인하기
    const isValid = checkValidationPhone(myphone)
    if(isValid){
        // 2. 핸드폰 토큰 6자리 만들기
        const token = getToken()
        // 3. 핸드폰으로 토큰 전송하기
        sendToSms(myphone,token)
    }
}

createTokenOfPhone("01023340224")

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


export const sendToSms = (myphone,result) => {
        console.log(`${myphone}으로 인증번호 ${result}를 보냈습니다.`)
}

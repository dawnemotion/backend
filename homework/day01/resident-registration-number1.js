// 1. 주민번호 뒷 자리를 가리는 함수를 하나 만들고, 해당 함수에 “920324-1038293” 와 같이 주민번호를 넣어서 실행하면 “920324-1******” 와 같은 형태로 콘솔에 출력되도록 만들어 주세요.




//     1. 주민번호는 앞 6자리, 뒤 7자리로 구성되어야 합니다.
//         - 그렇지 않을 경우 에러를 출력해주세요. (”에러발생!!! 갯수를 제대로 입력해주세요!!!”)

export const checkValidationNumber = (number) => {
    const pNumber = number.split("-")
    if(pNumber[0].length !== 6 || pNumber[1].length !== 7){
        console.log("에러발생!!! 갯수를 제대로 입력해주세요!!!")
        return false
    }else{
        return true
    }
}

//     2. 주민번호 가운데가 ”-” 로 구성되어야 합니다. 
//         - 그렇지 않을 경우 에러를 출력해주세요. (”에러발생!!! 형식이 올바르지 않습니다!!!”)

export const checkDash = (number) => {
    const numberDash = number.includes("-");
    if(numberDash === false){
        console.log("에러발생!!! 형식이 올바르지 않습니다!!")
        return 
    }

}

//     3. 뒤 7자리 중, 끝 6자리는 *로 변경해서 출력해 주세요.

export const masking = () => { 

}





// 1. 회원가입을 축하하는 형태의 템플릿을 출력하는 함수를 만들어 주세요.
//     a. **이메일**, **주민번호**, **휴대폰 번호**, **내가 좋아하는 사이트**를 함수의 입력으로 받고, 해당 내용이 템플릿에 포함되어 콘솔에 출력되어야합니다.
//     b. 콘솔에 출력된 화면의 캡쳐본과 코드가 적힌 파일을 클래스룸에 제출해주세요.
export const checkValidationEmail = (email) => {
    if(!email.includes("@") || email === undefined){
        console.log("에러발생!! 이메일을 제대로 입력해 주세요!!!!")
        return false;
    }else{
        return true;
    }
}

export const checkValidationPeopleNumber = (peoplenumber) => {
    if(peoplenumber.includes("-") === false || peoplenumber.split("-")[0].length !== 6 
    || peoplenumber.split("-")[1].length !== 7){
        console.log("에러발생!! 주민번호를 다시 확인해주세요!!")
        return false;
    }else{
        return true;
    }

}

export const checkValidationPhoneNumber = (phonenumber) => {
    const aaa = phonenumber.split("-")
    if(aaa[0].length !== 3 || aaa[1].length !== 4 || aaa[2].length !== 4){
        console.log("에러 발생!! 핸드폰번호를 제대로 입력해주세요!!!")
        return false
    } else {
        return true
    }
}

export const checkValidationSite = (favoritesite) => {
    if(favoritesite.split(".")[1] !== "com"){
        console.log("에러발생!! 주소를 다시 확인해주세요!!")
        return false
    }else{
        return true
    }

}


export const getWelComeTemplate = ({email, peoplenumber,phonenumber,favoritesite}) => {
    return `
    <html>
        <body>
            <h1>${email}님 회원가입을 축하드립니다!!<h1>
            <hr />
            <div>이메일: ${email}</div>
            <div>주민번호: ${peoplenumber}</div>
            <div>휴대폰번호: ${phonenumber}</div>
            <div>내가좋아하는사이트: ${favoritesite}</div>
        </body>
    </html>
    `
}


export const sendTemplateToEmail = (email, mytemplate) => {
    console.log(`${email} 이메일로 ${mytemplate} 를 전송합니다.`)
}


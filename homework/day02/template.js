// 1. 회원가입을 축하하는 형태의 템플릿을 출력하는 함수를 만들어 주세요.
//     a. **이메일**, **주민번호**, **휴대폰 번호**, **내가 좋아하는 사이트**를 함수의 입력으로 받고, 해당 내용이 템플릿에 포함되어 콘솔에 출력되어야합니다.
//     b. 콘솔에 출력된 화면의 캡쳐본과 코드가 적힌 파일을 클래스룸에 제출해주세요.

const getWelComeTemplate = ({email, peoplenumber,phonenumber,favoritesite}) => {
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

const profile = {
    email:"nextdodream@gmail.com",
    peoplenumber:"123456-7891011",
    phonenumber:"010-1234-5678",
    favoritesite:"google.com"
}

const result = getWelComeTemplate(profile)
console.log(result)

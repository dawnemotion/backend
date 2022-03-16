export const checkValidationEmail = (email) => {
    // a. 이메일이 정상인지 확인
    if(!email.includes("@") || email === undefined){
        console.log("에러발생!! 이메일을 제대로 입력해 주세요!!!!")
        return false;
    }else{
        return true;
    }
}

export const getWelComeTemplate = ({name,age,school}) => {

    // 여기서 오늘 날짜로 만들기!!!
    const aaa = new Date() // 현재 시간을 나타낸다
    const yyyy = aaa.getFullYear() // 현재시간에서 년도를 구한다.
    const mm = String(aaa.getMonth()+1).padStart(2,"0") // 현재시간에서 달을 구한다.
    const dd = String(aaa.getDate()).padStart(2,"0") // 일자를 구한다.
    const createdAt = `${yyyy}-${mm}-${dd}` // year + "-" + month + "-" + date yyyy는 년도의 4자리수 mm은 월의 2자리수 dd는 일의 2자리수

    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    
    `

}

export const sendTemplateToEmail = (email, mytemplate) => {
    console.log(`${email} 이메일로 ${mytemplate} 를 전송합니다.`)
}

        
        // a-a. "@" 이 포함됐는지 여부확인
        // a-b. 이메일이 존재하는지 확인
        // a-b-a. 이메일 뒤자리 4자리가 .com이맞는지?
        // b. 가입환영 템플릿 만들기

    // c. 이메일에 가입환영 템플릿 전송하기



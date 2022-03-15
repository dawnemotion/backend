// 날짜/시간을 생성하는 함수를 하나 만들고, 
// 해당 함수를 실행하면 “오늘은 2020년 12월 2일 11:30:29 입니다.” 라는 메시지가 콘솔에 출력되도록 만들어 주세요.
// - 콘솔에 출력된 화면의 캡쳐본과 코드가 적힌 파일을 클래스룸에 제출해주세요.



const day = () => {
    const time = new Date('2020-12-02 11:30:29')
    console.log(`오늘은 ${time.getYear()+1900}년 ${time.getMonth()+1}월 ${time.getDate()}일 
    ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}입니다. `)
}

day();
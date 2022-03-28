export const peopleNumber = (personal) => {
    // - 있는지 확인
    const pNdash = personal.includes("-")
    // -를 기준으로 주민등록번호 앞,뒤로 나누기
    const pN = personal.split("-")
    // 검증단계
    if(pNdash === false){
    // -가 없는경우
        console.log("주민등록번호 형식이 맞지 않습니다.")
    // 앞 뒤 자리수가 맞지않는경우 
    }else if(pN[0].length !== 6 || pN[1].length !== 7){
        console.log("주민등록 번호가 맞지 않습니다.")
    // -가 있고 앞 뒤 자리수가 맞으면 뒷부분 마스킹 
    }else{
        const pNmasking = pN[1].split("").fill("*",-7).join("")
        const pNumber = pN[0]+"-"+pNmasking
    // 마스킹처리한 주민등록번호 반환
        return pNumber
    }



}
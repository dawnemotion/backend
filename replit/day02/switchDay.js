// switch-case를 이용해서 오늘의 요일을 출력해주세요.
// HINT: MDN Date
let time = new Date();
// new Date()이용해 시간을 확인하고
// let day = time.getDay();
let day = time.getDay();
// time.getDay()를 이용하면 요일이 숫자로 표시된다.
// 2는 화요일 7은 일요일이다.

switch (day) {
  case 1:
    dayName = "월요일";
    break;
  case 2:
    dayName = "화요일";
    break;
  case 3:
    dayName = "수요일";
    break;
  case 4:
    dayName = "목요일";
    break;
  case 5:
    dayName = "금요일";
    break;
  default:
    dayName = "주말입니다."
    // 평일을 제외한 나머지를 default로 빼내어 주말입니다 출력.
}
console.log(dayName)

// 평일일 경우 해당 요일 출력 ("월요일", "화요일", ...)
// 주말일 경우 "주말입니다." 출력

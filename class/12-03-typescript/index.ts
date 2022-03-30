// 타입 추론
let aaa = "안녕하세요";
aaa = 3;

console.log(aaa);

// 타입 명시
let bbb: string = "반갑습니다";
bbb = 10;

// 문자타입
let ccc: string;
ccc = "반가워요";
ccc = 3;

// 숫자타입
let ddd: number;
ddd = "안녕하세요";

// 블린타입
let eee: boolean;
eee = true;
eee = "false"; // true로 작동한다. 문자열안에 문자가 있기 때문에

// 배열타입
let fff: number[] = [1, 2, 3, 4, "안녕하세요"];
let ggg: string[] = [1, 2, 3, "안녕하세요"];
let hhh: (number | string)[] = [1, 2, 3, "안녕하세요"];

// 객체타입
interface IProfile {
  name: string;
  age: string | number;
  school: string;
  hobby?: string;
}

let profile: IProfile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};

profile.age = "8살";
profile.school = 123;
profile.hobby = "수영";

// 함수타입
// 함수는 타입추론이 되지않는다.
// 함수에 적용되는 매개변수에 타입을 정해주면 인자에는 매개변수에 적용되는 타입을 입력해야한다.
// 매개변수 밖에 타입을 지정해주면 그것은 리턴의 타입으로 된다.
const add = (money1: number, money2: number, unit: string): string => {
  return money1 + money2 + unit;
};

add(1000, 2000, "딸라");

// 객체타입
interface IProfile {
  name: string;
  age: string | number;
  school: string;
  hobby?: string;
}

let creatBoardinput1: IProfile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};

let creatBoardinput2: IProfile ={
  name: "철수",
  hobby: "수영"
}

profile.age = "8살";
profile.school = 123;
profile.hobby = "수영";
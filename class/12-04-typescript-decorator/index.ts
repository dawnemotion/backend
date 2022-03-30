function zzz(aaaaaaa) {
  console.log("==============");
  console.log(aaaaaaa);
  console.log("==============");
}

@zzz
class AppController {}

// public
// 모든곳에서 사용가능
class Aaa {
  constructor(public mypower) {
    this.mypower = mypower;
  }

  ggg() {
    console.log("안녕하세요");
  }
}

const aaa = new Aaa(50);
aaa.mypower = 5;

// private
// 바깥에서 접근이 못한다. 안에서만 사용.
class Bbb {
  constructor(private mypower) {
    this.mypower = mypower;
  }
  ggg() {
    this.mypower = 10;
    console.log("안녕하세요");
  }
}

const bbb = new Bbb(50);

// readonly
// 안에서 보기만 가능
//
class Ccc {
  constructor(readonly mypower) {
    this.mypower = mypower;
  }
  ggg() {
    this.mypower = 10;
    console.log("안녕하세요");
  }
}

const bbb = new Bbb(50);

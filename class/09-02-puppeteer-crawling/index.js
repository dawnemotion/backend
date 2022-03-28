import puppeteer from "puppeteer"

async function statrCrawling(){
    const browser = await puppeteer.launch({ headless: false})
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720})
    await page.goto("https://www.goodchoice.kr/product/search/2")
    await page.waitForTimeout(1000)
    

    const location = await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
     (el) => el.textContent)
    await page.waitForTimeout(1000)

    console.log(location)

    // console.log(stage)
    // console.log(price)
}

statrCrawling()
// 함수식 startCrawling 생성, 함수실행식 입력
// 설치한 puppeteer import를 해준다.
// 스크래핑과 다른점은 사이트 주소를 모를때 사용한다는 점이다.
// puppeteer에 내장되어있는 크로미움을 실행해본다.
// puppeteer.launch({}) 입력 option: headless: false(눈에보이게),true(눈에안보이게)
// 비동기로 처리를 해야한다. 오래걸려서 명령마다 비동기처리
// const page = await browser.newPage() 페이지를 열어주고
// await page.setViewport({width:1280,height:720}) 브라우저 사이즈 설정
// await page.goto("https://naver.com") 어디로 갈건지 정해준다
// 크로미움은 누구나 수정할수 있게 해둔 오픈소스api이다.
// 페이지를 종료해도된다.
// 접속을 했는데 가져오려는 정보가 어디에 있는지 어떻게알까?
// 개발자도구 들어가서 가져오려는 정보위에 마우스를 누르면 해당태그로 이동 복사해서 가지고온다
// page.$eval()에 가져오려는 주소를 넣어준다.
// page.$eval(주소,(el) => el.textContent) 주소의 엘리먼트 그 엘리먼트는 textcontent를 가지고온다.
// 잘나오는지 console.log로 표시한다.
// 하지만 딜레이를 좀 걸어서 차단당하지 않게 해준다. 정기적인 딜레이보다는 랜덤으로
// for문으로 여러개의 정보를 가지고 올 수도 있다.
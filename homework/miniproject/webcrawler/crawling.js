import puppeteer from 'puppeteer'
import mongoose from 'mongoose'
import { CoffeeList } from './models/coffeList.js'

// mongodb 연결
mongoose.connect("mongodb://localhost:27017/miniproject")

// 크롤링 로직
const carwling = async () => {
    const browser = await puppeteer.launch({headless:true})
    const page = await browser.newPage()
    await page.setViewport({width:1280, height:720})
    await page.goto("https://www.starbucks.co.kr/menu/drink_list.do")
    await page.waitForTimeout(1000)
    
    for(let i=1; i<=10; i++){
        const coffename = await page.$eval(
            `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dd`,
            (el) => el.textContent)
        const coffeimage = await page.$eval(
            `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dt > a > img`,
            (el) => el.src)
            
        const coffeList = new CoffeeList({
            name: coffename,
            image: coffeimage
        }) 
        await coffeList.save()
    }
    await browser.close()
}

carwling()
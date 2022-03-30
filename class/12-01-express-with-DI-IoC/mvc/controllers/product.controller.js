// import { CashService } from './services/coupon.service.js'
// import { ProductService } from './services/product.service.js'
// 밖에서 임포트해서 가져오기때문에 따로 임포트할 필요가 없어졌다.


export class ProductController{
    // 2. 앞서 받아준 인자(agument)를 매개변수(parameter)로 받는다
    constructor(moneyService, productService){
        // 3.받아준 매개변수를 넣어줄 this를 설정
        // 매개변수로 받은 money,product를 이 함수 내에서 쓸 this로 설정
        this.moneyService = moneyService
        this.productService = productService
    }

    buyProduct = (req,res) => {
        // 1. 가진 돈 검증하는 코드(10줄 -> 2줄)
        // 기존에 했던 캐시서비스를 밖에서 받아온 this.moneyService로 변경
        const hasMoney = this.moneyService.checkValue() // true 또는 false 리턴
    
        // 2. 판매여부 검증하는 코드(10줄->2줄)
        // const productService = new ProductService()
        // 인스턴스 라고 불린다.
        // 마찬가지로 밖에서 가지고온 productService로 변경
        const isSoldout = this.productService.checkSoldout() // true 또는 false 리턴
        
    
        // 3.상품 구매하는 코드
        if(hasMoney /* ===  true*/ && !isSoldout /* === true */){
            res.send("상품 구매 완료!!")
        }
    }

    refundProduct = (req,res) => {
    
        // 1. 판매여부 검증하는 코드(10줄->2줄)
        // const productService = new ProductService()
        // 인스턴스 라고 불린다.
        const isSoldout = this.productService.checkSoldout() // true 또는 false 리턴
        
        // 2. 상품 환불하는 코드
        if(isSoldout){
            res.send("상품 환불 완료!!")
        }
    }
    
}
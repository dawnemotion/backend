import express from 'express'
import { ProductController } from './mvc/controllers/product.controller.js'
import { CouponController } from './mvc/controllers/coupon.controller.js'
import { ProductService } from './mvc/controllers/services/product.service.js'
import { CashService } from './mvc/controllers/services/coupon.service.js'
import { PointService } from './mvc/controllers/services/point.service.js'

const app = express()

const productServic = new ProductService()
const cashService = new CashService() // new 한번으로 모든 곳에서 재사용 가능(싱글톤패턴)
const pointService = new PointService()
// 상품 API
// 1.ProductController(cashService,productServic) 인자로 들어간 cash서비스 등은
// constructor로 들어간다.
const productController = new ProductController(cashService,productServic)
app.post("/products/buy", productController.buyProduct) // 상품 구매하기
app.post("/products/refund", productController.refundProduct) // 상품 환불하기

// 쿠폰 API
const couponeController = new CouponController(pointService)
app.post('/coupons/buy', couponeController.buyCoupon) // 쿠폰(상품권) 구매하기 

app.listen(3000)

// 
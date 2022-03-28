/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 스타벅스 커피 목록 조회 API
 *          tags: [List]
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  name:
 *	                                    type: string
 *	                                    example: 나이트로 콜드브루
 *                                  image:
 *	                                    type: string
 *	                                    example: https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 */
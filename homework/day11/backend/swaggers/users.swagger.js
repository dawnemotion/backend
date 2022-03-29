/**
 * @swagger
 * /users:
 *      get:
 *          summary: 회원 목록 조회 API
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
 *	                                    example: 정세진
 *                                  email:
 *	                                    type: string
 *	                                    example: nextdodream@gmail.com
 *                                  personal:
 *	                                    type: string
 *	                                    example: 123456-7891011
 *                                  prefer:
 *	                                    type: string
 *	                                    example: https://naver.com
 *                                  pwd:
 *	                                    type: string
 *	                                    example: 1234
 *                                  phone:
 *	                                    type: string
 *	                                    example: 01012345678
 *                                  og:
 *                                      properties:
 *	                                        title:
 *	                                            type: string
 *	                                            example: 네이버
 *	                                        url:
 *	                                            type: string
 *	                                            example: https://www.naver.com/
 *	                                        image:
 *	                                            type: string
 *	                                            example: https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 *	                                        description:
 *	                                            type: string
 *	                                            example: 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요
 */
/**
 * @swagger
 * /tokens/phone:
 *      patch:
 *          summary: 인증완료 API
 *          tags: [Join]
 *          parameters:
 *              - in: query
 *                name: phone
 *                type: string
 *              - in: query
 *                name: token
 *                type: string
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
 *                                  phone:
 *	                                    type: string
 *	                                    example: 01012345678
 *                                  token:
 *	                                    type: string
 *	                                    example: 123412
 *                                  isAuth:
 *	                                    type: boolean
 *	                                    example: true
 *              422:
 *                  description: 실패 
 *                  content: 
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  phone:
 *	                                    type: string
 *	                                    example: 01023456789
 *                                  token:
 *	                                    type: string
 *	                                    example: 123491
 *                                  isAuth:
 *	                                    type: boolean
 *	                                    example: false
 */
 
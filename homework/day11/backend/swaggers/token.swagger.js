/**
 * @swagger
 * /tokens/phone:
 *      post:
 *          summary: 인증요청 API
 *          tags: [Join]
 *          parameters:
 *              - in: query
 *                name: phone
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
 *	                                    example: 1234
 *
 */
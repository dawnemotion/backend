/**
 * @swagger
 * /tokens/phone:
 *  patch:
 *      summary: 핸드폰 인증번호 검증 API
 *      tags: [Token]
 *      requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: 01023340224
 *                              token:
 *                                  type: string
 *                                  required: true
 *                                  example : 1234
 *      responses:
 *          '200':
 *                  description: user의 _id 리턴
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string
 *                            example: 61ee1b7272a81036fc429a05
 */
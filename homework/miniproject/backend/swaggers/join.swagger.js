/**
 * @swagger
 * /user:
 *  post:
 *      summary: 회원가입API
 *      tags: [User]
 *      requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  required: true
 *                                  example: 정세진
 *                              email:
 *                                  type: string
 *                                  required: true
 *                                  example : nextdodream@gmail.com
 *                              personal:
 *                                  type: string
 *                                  required: true
 *                                  example : 123456-7891011
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: 01023340224
 *                              prefer:
 *                                  type: string
 *                                  required: true
 *                                  example : https://naver.com
 *                              pwd:
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
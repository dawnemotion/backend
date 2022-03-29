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
 *                  description: 인증번호 인증성공
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: boolean
 *                            example: true
 */

/**
 * @swagger
 * /tokens/phone:
 *  post:
 *      summary: 토큰번호전송API
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
 *      responses:
 *          '200':
 *                  description: 성공
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string
 *                            example: 인증번호 전송 성공
 */
/**
 * @swagger
 * /boards:
 *   get:
 *     summary(요약): 게시글가져오기
 *     tags : [Board]
 *     parameters:
 *          - in: query
 *            name: number
 *            type: int
 *     response:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              properties: 객체라는뜻
 *                                  number:
 *                                      type: int
 *                                      example: 2
 *                                  writer:
 *                                      type: string
 *                                      example: 철수
 *                                   title:
 *                                      type: string
 *                                      example:제목입니다~~                         
 *                                   contents:        
 *                                      type: string                             
 *                                      example: 내용입니다~
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

// @openapi 이부분은 @swagger 둘 중 하나만 적용해도된다.
// 작성시 띄워쓰기 유의
// 데이터 형태를 어떻게 줄건지 schema

/**
 * @swagger
 * /boards:
 *   get:
 *     summary(요약): 게시글가져오기
 *     tags : [Board]
 *     parameters:
 *          - in: query
 *            name: number
 *            type: int
 *     responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              properties: 객체라는뜻
 *                                  number:
 *                                      type: int
 *                                      example: 2
 *                                  writer:
 *                                      type: string
 *                                      example: 철수
 *                                   title:
 *                                      type: string
 *                                      example:제목입니다~~                         
 *                                   contents:        
 *                                      type: string                             
 *                                      example: 내용입니다~
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
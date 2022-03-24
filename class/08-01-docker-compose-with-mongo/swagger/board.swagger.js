/**
 * @swagger
 *  /boards:
 *   get:
 *      summary: 게시글가져오기
 *      tages: [Board] 게시판부분
 *      parameters:
 *          - in: querry
 *          name: number
 *          type: int
 *      responses:
 *          200:
 *              description: 성공 (성공했을때 response가 어떻게 나올지 만드는부분)
 *              content:
 *                   application/json:
 *                      schema: (어떤형태로 나타낼건지?)
 *                          type: array (배열로)
 *                          items: (배열속에 어떻게 나올건지?)
 *                              properties: (객체로)
 *                                  number: (객체속 키)
 *                                      type:int (넘버는 어떤속성으로 )
 *                                      example: 2
 *                                  writer: (객체속 키)
 *                                      type:string
 *                                  title: (객체속 키)
*                                       type:string
 *                                  contents: (객체속 키)
 *                                      type:string 
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
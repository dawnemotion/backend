import { Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './board.service';

@Resolver()
export class BoardResolver {
    constructor(private readonly boardService: BoardService) {}

    // 엔드포인트가 적혀져 있지 않으면 http://localhost:3000/ 기본적으로 내장되어 있다.
    @Query(() => String)
    getHello(): string {
        return this.boardService.getHello();
    }
}

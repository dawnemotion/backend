import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardResolver {
    constructor(private readonly boardService: BoardService) {}

    // Board는 대괄호이기 때문에 타입을[]로 감싸준다.
    @Query(() => [Board])
    fecthBoards() {
        return this.boardService.findAll();
    }

    @Mutation(() => String)
    createBoard(
        @Args('writer') writer: string,
        @Args('title') title: string,
        @Args('contents') contents: string,
        @Args('createBoardInput') createBoardInput: CreateBoardInput,
    ) {
        return this.boardService.create();
    }
}

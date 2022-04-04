import { Injectable } from '@nestjs/common';
import { create } from 'domain';

@Injectable()
export class BoardService {
    //     getHello(): string {
    //         return 'Hello World!';
    //     }

    // 1.비즈니스로직 구성
    findAll() {
        // DB에 접속해서 데이터를 꺼내오는로직

        return [
            {
                number: 1,
                writer: '철수',
                title: '제목입니다',
                contents: '내용입니다',
            },
            {
                number: 1,
                writer: '철수',
                title: '제목입니다',
                contents: '내용입니다',
            },
            {
                number: 1,
                writer: '철수',
                title: '제목입니다',
                contents: '내용입니다',
            },
        ];
    }

    create() {
        // DB에 접속해서 데이터를 등록하는 로직

        return '등록에 성공했습니다.';
    }
}

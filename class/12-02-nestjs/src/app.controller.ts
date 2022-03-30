import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    // 엔드포인트가 적혀져 있지 않으면 http://localhost:3000/ 기본적으로 내장되어 있다.
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}

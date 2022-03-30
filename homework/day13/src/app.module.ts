import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StarbucksModule } from './apis/starbucks/starbucks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Starbucks } from './apis/starbucks/entities/starbucks.entities';

// GraphQl setting
// 최종핵심 실행부분 appmodule에서 다른 api조립도 하고 GraphQl설정도 이곳에서 한다.
// DB연결설정 등등 모든 설정들을 이곳에서 한다.
@Module({
    imports: [
        StarbucksModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/commons/graphql/schema.gql',
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'tnpwlsl12',
            // 디비버에서 생성한 데이터베이스이름을 적어넣는다.
            database: 'starbucks',
            // entities 이 부분에는 스키마를 적용하는 부분 models === entities
            // entities작성 이후 import로 가지고 온다.
            entities: [Starbucks],
            // 자동으로 디비에 데이터를 저장할 것인지 true면 ok
            synchronize: true,
            // 로그를 나타내준다.
            logging: true,
        }),
    ],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}

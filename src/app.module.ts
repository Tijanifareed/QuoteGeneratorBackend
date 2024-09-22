import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Quote} from "./model/quote.entity";


@Module({
  imports: [
    // ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Freddie2810',
        database: 'quote_db',
        entities: [Quote],
        synchronize: true,
      }),
    }),
    QuoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

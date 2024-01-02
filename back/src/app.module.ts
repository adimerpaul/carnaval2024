import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import { DancersModule } from './dancers/dancers.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: process.env.DB_TYPE as any || 'postgres',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT as any, 10) || 5432,
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || '123',
            database: process.env.DB_DATABASE || 'carnaval',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
        }),
        UsersModule,
        DancersModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

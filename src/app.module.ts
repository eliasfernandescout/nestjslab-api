import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?authSource=admin`,
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

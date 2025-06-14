import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import {StudentsModule} from './students/students.module'
import { ReportsModule } from './reports/reports.module';
// 
@Module({ //add more properties to the module decorator
  imports: [ConfigModule.forRoot({isGlobal:true}), AuthModule, BookmarkModule, StudentsModule, PrismaModule, ReportsModule], controllers: [ UserController]
})
export class AppModule {}

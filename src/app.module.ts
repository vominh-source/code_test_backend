import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import {StudentsModule} from './students/students.module'
import { ReportsModule } from './reports/reports.module';
// 
@Module({ //add more properties to the module decorator
  imports: [ConfigModule.forRoot({isGlobal:true}),  StudentsModule, PrismaModule, ReportsModule], 
  
})
export class AppModule {}

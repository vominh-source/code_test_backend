import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // tức là có thể xài prisma service ở bất kỳ module nào mà không cần import PrismaModule
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

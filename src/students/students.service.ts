import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Student } from '@prisma/client';
import { GetStudentDto } from './dto/get-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findBySbd(dto: GetStudentDto): Promise<Student> {
    const student = await this.prisma.student.findUnique({
      where: { sbd: dto.sbd },
    });

    if (!student) {
      throw new NotFoundException(`Không tìm thấy học sinh với SBD ${dto.sbd}`);
    }

    return student;
  }
}

import { Controller, Get, Query, ValidationPipe, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { GetStudentDto } from './dto/get-student.dto';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get(':sbd')
    getStudentBySbd(@Param(ValidationPipe) dto: GetStudentDto) {
        return this.studentsService.findBySbd(dto);
    }
}

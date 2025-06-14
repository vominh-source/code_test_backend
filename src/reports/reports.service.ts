import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ScoreLevel } from '../subjects/enums/score-level.enum';
import { SubjectScoreClassifier } from '../subjects/subject-score.classifier';
import { TopGroupAStudentDto } from './dto/top-group-a.dto';
export interface ScoreReport{
  subject: string;
  distribution: Record<ScoreLevel, number>; // chứa các level và số học sinh tương ứng
}
@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getScoreDistributionBySubject(subject: string) {
    const students = await this.prisma.student.findMany();
    const distribution: Record<ScoreLevel, number> = {
      [ScoreLevel.EXCELLENT]: 0,
      [ScoreLevel.GOOD]: 0,
      [ScoreLevel.AVERAGE]: 0,
      [ScoreLevel.WEAK]: 0,
    };

    for (const student of students) {
      const score = student[subject as keyof typeof student] as number;
      const level = SubjectScoreClassifier.classify(score);
      if (level) distribution[level]++;
    }

    return { subject, distribution };
  }

  async getScoreDistributionSummary() {
    const subjects = ['toan', 'nguVan', 'ngoaiNgu', 'vatLi', 'hoaHoc', 'sinhHoc', 'lichSu', 'diaLi', 'gdcd'];
    const result:ScoreReport[] = [];

    for (const subject of subjects) {
      const report = await this.getScoreDistributionBySubject(subject);
      result.push(report);
    }

    return result;
  }

  async getTop10GroupA(): Promise<TopGroupAStudentDto[]> {
    const students = await this.prisma.student.findMany({
      where: {
        toan: { not: null },
        vatLi: { not: null },
        hoaHoc: { not: null },
      },
    });

    const studentsWithTotal = students.map((s) => ({
      sbd: s.sbd,
      toan: s.toan,
      vatLi: s.vatLi,
      hoaHoc: s.hoaHoc,
      totalScore: (s.toan ?? 0) + (s.vatLi ?? 0) + (s.hoaHoc ?? 0),
    }));

    studentsWithTotal.sort((a, b) => b.totalScore - a.totalScore);

    return studentsWithTotal.slice(0, 10);
  }

}

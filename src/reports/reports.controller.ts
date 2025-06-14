import { Controller, Get, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('subject/:subject')
  getBySubject(@Param('subject') subject: string) {
    return this.reportsService.getScoreDistributionBySubject(subject);
  }

  @Get('summary-by-subjects')
  getSummary() {
    return this.reportsService.getScoreDistributionSummary();
  }

  @Get('top-group-a')
  async getTopGroupA() {
    return this.reportsService.getTop10GroupA();
  }
}

import { IsString } from 'class-validator';

export class TopGroupAStudentDto {
  @IsString()
  sbd: string;

  toan: number | null;
  vatLi: number | null;
  hoaHoc: number | null;
  totalScore: number;
}

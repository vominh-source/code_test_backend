import { IsString, Length, Matches } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetStudentDto  {
  @IsString()
  @Length(8, 8, { message: 'Số báo danh phải có đúng 8 ký tự.' })
  @Matches(/^\d+$/, { message: 'Số báo danh chỉ được chứa chữ số.' })
  @Transform(({ value }) => value.trim())

  sbd: string;
}

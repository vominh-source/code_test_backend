import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryColumn()
  sbd: string;

  @Column('float', { nullable: true }) toan: number;
  @Column('float', { nullable: true }) nguVan: number;
  @Column('float', { nullable: true }) ngoaiNgu: number;
  @Column('float', { nullable: true }) vatLi: number;
  @Column('float', { nullable: true }) hoaHoc: number;
  @Column('float', { nullable: true }) sinhHoc: number;
  @Column('float', { nullable: true }) lichSu: number;
  @Column('float', { nullable: true }) diaLi: number;
  @Column('float', { nullable: true }) gdcd: number;
  @Column({ nullable: true }) maNgoaiNgu: string;
}

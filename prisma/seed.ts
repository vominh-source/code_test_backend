// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as csv from 'csv-parser';

const prisma = new PrismaClient();

async function seed() {
  const students: any[] = [];

  fs.createReadStream('prisma/diem_thi_thpt_2024.csv')
    .pipe(csv())
    .on('data', (row) => {
      students.push({
        sbd: row['sbd'],
        toan: row['toan'] ? parseFloat(row['toan']) : null,
        nguVan: row['ngu_van'] ? parseFloat(row['ngu_van']) : null,
        ngoaiNgu: row['ngoai_ngu'] ? parseFloat(row['ngoai_ngu']) : null,
        vatLi: row['vat_li'] ? parseFloat(row['vat_li']) : null,
        hoaHoc: row['hoa_hoc'] ? parseFloat(row['hoa_hoc']) : null,
        sinhHoc: row['sinh_hoc'] ? parseFloat(row['sinh_hoc']) : null,
        lichSu: row['lich_su'] ? parseFloat(row['lich_su']) : null,
        diaLi: row['dia_li'] ? parseFloat(row['dia_li']) : null,
        gdcd: row['gdcd'] ? parseFloat(row['gdcd']) : null,
        maNgoaiNgu: row['ma_ngoai_ngu'] || null,
      });
    })
    .on('end', async () => {
      for (const student of students) {
        await prisma.student.create({ data: student });
      }
      console.log('Seeding completed!');
      await prisma.$disconnect();
    });
}

seed();

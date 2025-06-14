-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "sbd" TEXT NOT NULL,
    "toan" DOUBLE PRECISION,
    "nguVan" DOUBLE PRECISION,
    "ngoaiNgu" DOUBLE PRECISION,
    "vatLi" DOUBLE PRECISION,
    "hoaHoc" DOUBLE PRECISION,
    "sinhHoc" DOUBLE PRECISION,
    "lichSu" DOUBLE PRECISION,
    "diaLi" DOUBLE PRECISION,
    "gdcd" DOUBLE PRECISION,
    "maNgoaiNgu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_sbd_key" ON "Student"("sbd");

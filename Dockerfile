# Stage 1: Build NestJS app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# 👇 Prisma generate nếu bạn cần (nếu không có lỗi thì có thể bỏ qua)
RUN npx prisma generate

# 👇 Migrate DB nếu bạn muốn deploy schema DB tự động
# RUN npx prisma migrate deploy

# 👇 Build mã nguồn NestJS ra thư mục dist/
RUN npm run build

# Stage 2: Chạy app production
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./


# 👇 Chạy app
CMD ["node", "dist/main"]

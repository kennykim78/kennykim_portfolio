# 1단계: 빌드 스테이지 (Vite 정적 빌드)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2단계: 실행 스테이지 (Nginx 서빙)
FROM nginx:alpine
# 빌더 단계에서 생성된 dist 폴더 내 정적 리소스만 Nginx 경로로 복사
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

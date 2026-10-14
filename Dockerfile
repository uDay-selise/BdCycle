FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .
ARG ci_build=prod
RUN NODE_OPTIONS="--max-old-space-size=4096" npx vite build --mode "${ci_build}"

FROM nginxinc/nginx-unprivileged:1.29-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080

FROM node:16
COPY ./ /app
WORKDIR /app
RUN npm install -g pnpm
RUN pnpm install && pnpm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf


# 添加目录可访问权限
RUN chmod -R 755 /app

FROM node:16
COPY ./ /app
WORKDIR /app
RUN npm install -g pnpm
RUN pnpm config set registry https://registry.npm.taobao.org
RUN pnpm install && pnpm run generate

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

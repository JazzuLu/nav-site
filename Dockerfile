# 定义初始镜像
FROM node:lts-alpine

# 确定工作区
WORKDIR /app

# 将项目文件复制到工作目录
COPY . /app

# 配置 PM2
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY wxg0ilczeu6r506
ENV PM2_SECRET_KEY 30api621q5ar1f6

# 安装 pnpm
RUN npm install -g pnpm
# 使用 pnpm 安装依赖
RUN pnpm install --shamefully-hoist
# 打包构建
RUN pnpm run build

# 暴露端口
EXPOSE 3000

# 设置应用程序启动命令
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
# CMD [ "node" , ".output/server/index.mjs" ]
# CMD ["npm","run","dev"]

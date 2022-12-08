FROM node:8

# 设置工作目录
WORKDIR /usr/src/app

# 复制项目依赖
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build

# 安装 nginx
RUN apt-get update && \
    apt-get install -y nginx

# 复制 nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/

# 设置端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]

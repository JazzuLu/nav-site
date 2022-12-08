FROM node:16
RUN mkdir -p /nuxt-app
WORKDIR /nuxt-app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=80

CMD [ "npm", "start" ]

FROM nginx
WORKDIR /nuxt-app
COPY nginx.conf /etc/nginx/nginx.conf

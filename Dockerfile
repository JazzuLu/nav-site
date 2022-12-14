FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY wxg0ilczeu6r506
ENV PM2_SECRET_KEY 30api621q5ar1f6

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]

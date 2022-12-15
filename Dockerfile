FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY wxg0ilczeu6r506
ENV PM2_SECRET_KEY 30api621q5ar1f6

RUN npm install -g pnpm

RUN pnpm install --shamefully-hoist

COPY . .

RUN pnpm run build

EXPOSE 3000

# CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
# CMD [ "node" , ".output/server/index.mjs" ]
CMD ["npm","run","dev"]

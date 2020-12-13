FROM node:14
WORKDIR /app

COPY package*.json tsconfig*.json ./
RUN npm ci

COPY src/ src/

RUN npm run build 

RUN rm -r src

CMD ["npm", "run", "start:prod"]
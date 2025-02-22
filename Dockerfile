FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm run build-storybook

EXPOSE 8083

CMD ["npx", "storybook", "dev", "--ci", "-p", "8083"]
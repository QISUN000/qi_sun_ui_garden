FROM node:18-alpine as build

WORKDIR /qi_sun_ui_garden_build_checks

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm run build-storybook

EXPOSE 8018

CMD ["npx", "storybook", "dev", "--ci", "-p", "8018"]
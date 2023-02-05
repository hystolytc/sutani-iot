FROM node:lts-buster

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./app /home/app

EXPOSE 3000

ENV DB_HOST=mysql

RUN yarn install

CMD ["yarn", "prod"]
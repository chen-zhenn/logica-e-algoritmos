FROM node:18.12

WORKDIR /lab

COPY .eslintrc.json .
COPY .gitignore .
COPY package.json .
COPY yarn.lock .
COPY src/ src/

RUN yarn install
RUN yarn transpile:all

CMD ["yarn", "dev"]

FROM node:alpine
ARG PORT

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm i

COPY . ./

RUN PORT=${PORT}

EXPOSE ${PORT}
CMD ["npm", "start"]

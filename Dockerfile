ARG PORT="3000"
FROM node:alpine

WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV PORT=${PORT}
CMD npm run serve

FROM node:15.3.0-alpine3.10
WORKDIR /usr/src/app
COPY package.json /usr
run npm config set registry http://registry.npmjs.org/
run npm install
COPY ./code .
EXPOSE 80
CMD [ "node", "WebService.js" ]



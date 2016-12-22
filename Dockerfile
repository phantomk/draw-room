FROM node:7.3-onbuild

CMD npm install && npm start

EXPOSE 8989
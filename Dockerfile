FROM node

#This needs to be added after a npm install and npm test
ADD app /srv/web

WORKDIR /srv/web

ENTRYPOINT ["node", "app.js"]

EXPOSE 3000

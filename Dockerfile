FROM node:10

WORKDIR /var/current

COPY . /var/current

RUN npm install --production

CMD ["npm", "start"]
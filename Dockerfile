FROM docker.sieve.com.br/b2wads/node10:2.0.1

COPY . /var/current

RUN npm install --production

CMD ["npm", "start"]
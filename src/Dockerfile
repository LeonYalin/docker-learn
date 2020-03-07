FROM node:latest
LABEL author="Leon Yalin"

ENV NODE_ENV=production
ENV PORT=3000
ARG workdir=/var/www

COPY . ${workdir}
WORKDIR ${workdir}

RUN npm install
EXPOSE $PORT
ENTRYPOINT ["npm", "start"]
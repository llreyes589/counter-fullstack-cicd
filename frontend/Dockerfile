FROM node:22 AS base

WORKDIR /app

FROM base AS client-base
COPY . .
RUN npm install

FROM client-base AS client-dev

CMD ["npm", "run", "dev"]


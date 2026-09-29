FROM node AS build

COPY . /app
WORKDIR /app

RUN npm install && npm run build

RUN cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/

FROM node

COPY --from=BUILD /app/.next/standalone /app

WORKDIR /app

EXPOSE 3000/tcp

ENTRYPOINT [ "node", "server.js" ]
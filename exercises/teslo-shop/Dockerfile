FROM node:18.13.0-alpine as dev
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile --network-timeout 100000
CMD [ "yarn","start:dev" ]

FROM node:18.13.0-alpine as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile --network-timeout 100000


FROM node:18.13.0-alpine as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build

FROM node:18.13.0-alpine as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile --network-timeout 100000


FROM node:18.13.0-alpine as prod
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]










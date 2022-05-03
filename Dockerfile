FROM nikolaik/python-nodejs:python3.10-nodejs14-alpine as build_client
WORKDIR /client
COPY ./package*.json .
RUN npm ci --only=production
COPY . .
RUN npm run build

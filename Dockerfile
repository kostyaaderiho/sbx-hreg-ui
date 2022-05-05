FROM nikolaik/python-nodejs:python3.10-nodejs14-alpine as build_client
WORKDIR /client
COPY ./package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build_client /client/build /usr/share/nginx/html
EXPOSE 80 443

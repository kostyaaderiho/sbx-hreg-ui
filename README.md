# HREG - Client

> Prerequisites: NodeJS and Docker have to be installed on running machine.

## Develop

1. `npm i`
2. `npm run start` - runs the app in the development mode.

3. Download https://git.epam.com/epm-uii/sbx-hreg and go to the root.
4. `npm i`
5. `npm run server` - runs the server in the development mode and provides api.
6. Open [http://localhost:3001](http://localhost:3001) to view app in your browser.

## Production

1. `docker-compose -f docker-compose.yml up -d --build` - run nginx server to serve static files in docker container on `80` port.
2. Download https://git.epam.com/epm-uii/sbx-hreg and go to the root.
3. `npm i`
4. `npm run develop` - runs the server in the production mode and provides api on `3000` port.
5. Open [http://localhost](http://localhost) to view it in your browser.

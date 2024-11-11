# /app /usr /lib
# FROM --platform=linux/arm64 node:19.2-alpine3.17
#FROM --platform=$BUILDPLATFORM node:19.2-alpine3.17
FROM node:19.2-alpine3.17

# cd app
WORKDIR /app

# copy package.json
COPY package.json ./

# Instalar dependencias
RUN npm install

# copy app.js
COPY . .

# Realizar testing
RUN npm run test

#Eliminar archivos y directorios no necesarios en PROD
RUN rm -rf tests && rm -rf node_modules

# Unicamente las dependencies de prod
RUN npm install --prod

# Comando run de la imagen
CMD [ "node", "app.js" ]
FROM node:14

# create app directory inside the container
WORKDIR /usr/src/app

# copy package.json (and package-lock.json if present) into the container
COPY package*.json ./

# install npm packages
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8181
CMD [ "node", "src/server.js" ]

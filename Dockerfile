FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

# install curl
RUN apt-get install -y curl

# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# RUN npm install \
# RUN npm install express \
# RUN npm install babel-cli \
# RUN npm install babel-preset \
# RUN npm install babel-preset-env

# Bundle app source ?????????

RUN echo Test 1
RUN pwd

RUN echo Test 2
RUN echo "$PWD"

COPY ../public/app-bundle.js ./

EXPOSE 8181

CMD [ "node", "./app-bundle.js" ]

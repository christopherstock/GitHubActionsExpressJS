FROM node:14

# create app directory inside the container
# WORKDIR /usr/src/app
# WORKDIR /github/workspace

# copy package.json (and package-lock.json if present) into the container
COPY public/app-bundle.js ./

# install npm packages
# RUN npm install

# Bundle app source
# COPY . .

EXPOSE 8181

CMD [ "echo", "Hello from inside the Node.js Container" ]
CMD [ "node", "public/app-bundle.js" ]

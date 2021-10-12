FROM node:14

# Create app directory
# WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./


# install curl
# RUN apt-get install -y curl


# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# RUN npm install \
# RUN npm install express \
# RUN npm install babel-cli \
# RUN npm install babel-preset \
# RUN npm install babel-preset-env

# Bundle app source ?????????

RUN echo 1 =================================================
RUN ls -la
COPY . .
RUN echo 2 =================================================
RUN ls -la

# COPY public/ /public/
# RUN echo 4

RUN npm install
RUN npm run webpack-production

# RUN pwd
# RUN echo Test 2
# RUN echo "$PWD"
# RUN echo Test 3 - GitHub Workspace Dir:
# RUN echo ${GITHUB_WORKSPACE}
# RUN echo "$env.GITHUB_WORKSPACE"
# COPY "${GITHUB_WORKSPACE}/public/app-bundle.js" ./

EXPOSE 8181
CMD [ "node", "./public/app-bundle.js" ]

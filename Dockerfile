FROM node:14

# Create app directory
# WORKDIR /usr/src/app
# WORKDIR $GITHUB_WORKSPACE

# WORKDIR /github/workspace/

# install curl
# RUN apt-get install -y curl

RUN echo A =================================================
RUN ls -la

RUN echo 0 =================================================
RUN find / -print

# RUN echo B =================================================
# RUN ls -la /github/workspace/

# RUN mkdir public
# COPY public/* public/
COPY . .

# RUN echo C =================================================
# RUN ls -la /github/workspace/

RUN npm install
RUN npm run webpack-production

RUN echo D =================================================
RUN ls -la public

RUN echo E $GITHUB_WORKSPACE
RUN echo F ${GITHUB_WORKSPACE}

WORKDIR "/public"
EXPOSE 8181

# CMD [ "node", "app-bundle.js" ]

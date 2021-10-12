FROM node:14

# Create app directory
# WORKDIR /usr/src/app
# WORKDIR $GITHUB_WORKSPACE
WORKDIR /github/workspace/

# install curl
# RUN apt-get install -y curl

RUN echo A =================================================
RUN ls -la

RUN echo C =================================================
RUN ls -la /github/workspace/

RUN mkdir public
COPY public/* public/
COPY . .

RUN npm install
RUN npm run webpack-production

RUN echo B =================================================
RUN ls -la public

RUN echo C $GITHUB_WORKSPACE
RUN echo D ${GITHUB_WORKSPACE}

WORKDIR "/public"
EXPOSE 8181
CMD [ "node", "app-bundle.js" ]

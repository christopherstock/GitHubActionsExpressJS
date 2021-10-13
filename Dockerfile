FROM node:14

# Create app directory
# WORKDIR /usr/src/app
# WORKDIR $GITHUB_WORKSPACE

# WORKDIR /github/workspace/

# install curl
# RUN apt-get install -y curl

RUN echo BEFORE COPY =================================================
RUN ls -la

# RUN echo 0 =================================================
# RUN find / -print

# RUN mkdir public
# COPY public/* public/
COPY . .

RUN echo AFTER COPY =================================================
RUN ls -la

# WORKDIR "/public"
# EXPOSE 8181
# CMD [ "node", "app-bundle.js" ]

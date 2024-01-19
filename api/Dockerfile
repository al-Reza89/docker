FROM node:20.1.0

# nodemon used to restart the server when changes are made. install globally in the container
RUN npm install -g nodemon


WORKDIR /app

# copy all files from the current directory to the container
COPY . .

# install all dependencies
RUN npm install

EXPOSE 4000


CMD [ "npm", "run", "start" ]
FROM node:20.1.0

# working directory
WORKDIR /app

# copy package.json to the working directory
COPY package.json .

COPY . .

# install all dependencies
RUN npm install

EXPOSE 3000


CMD [ "npm", "run", "start" ]
# node version: 20.1.0 for successfull build
FROM node:20.1.0 


# Create app directory
# in this directory all the files will be copied
WORKDIR /app


# Copy package.json and package-lock.json any other files that are package related to app folder
COPY package*.json ./

# Copy all files from src folder to app folder
COPY src /app/

# run npm install to install all dependencies
RUN npm install 

# i don't write src/index.js because previously i have pass the src folder to app folder
CMD [ "node", "index.js" ]
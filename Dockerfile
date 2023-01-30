# Use an official Node.js runtime as the base image
FROM node:12-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's files
COPY  . .

ARG DOCKER_ENV

ENV DOCKER_ENV=$DOCKER_ENV

ENV TZ Africa/Nairobi

# Expose the port the app runs on
EXPOSE 8080

# Start the app
CMD [ "bin/www" ]
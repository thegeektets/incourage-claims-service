# Use an official Node.js runtime as the base image
FROM node:12-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]

# Use the official Node.js image based on Node.js 18
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Copy .env.production file
COPY .env.production ./.env

EXPOSE 4000

# Command to start the application
CMD ["npm", "start"]

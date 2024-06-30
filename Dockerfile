# Stage 1: Build Stage
# Use Node.js LTS version as base image for building
FROM node:lts-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your application (if needed)
RUN npm run build

# Stage 2: Production Stage
# Use Node.js LTS version as base image for production
FROM node:lts-alpine AS production

# Set working directory
WORKDIR /app

# Copy build artifacts from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/dist ./dist  

# Set environment variables (can also be passed during build)
ENV DB_TYPE=${DB_TYPE:-postgres}
ENV DB_HOST=${DB_HOST:-your-db-host.example.com}
ENV DB_PORT=${DB_PORT:-5432}
ENV DB_USERNAME=${DB_USERNAME:-yourUsername}
ENV DB_PASSWORD=${DB_PASSWORD:-yourPassword}
ENV DB_DATABASE=${DB_DATABASE:-yourDatabase}

# Expose the port your app runs on
EXPOSE 4000

# Command to run the app
CMD ["npm", "start"]

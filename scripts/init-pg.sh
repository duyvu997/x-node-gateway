#!/bin/bash

# Load environment variables from .env file
set -a
source .env
set +a

# Define variables
PG_CONTAINER_NAME="local-postgres"
PG_PORT="${DB_PORT:-5432}"  # Default to 5432 if DB_PORT is not set in .env
PG_USER="${DB_USERNAME:-yourUsername}"
PG_PASSWORD="${DB_PASSWORD:-yourPassword}"
PG_DATABASE="${DB_DATABASE:-yourDatabase}"

# Check if the container already exists and running
if [ "$(docker ps -q -f name=${PG_CONTAINER_NAME})" ]; then
    echo "PostgreSQL container '${PG_CONTAINER_NAME}' is already running."
    exit 0
fi

# Check if the container exists but stopped, then start it
if [ "$(docker ps -aq -f status=exited -f name=${PG_CONTAINER_NAME})" ]; then
    docker start ${PG_CONTAINER_NAME}
    echo "Started existing PostgreSQL container '${PG_CONTAINER_NAME}'."
    exit 0
fi

# If the container doesn't exist, create and start it
echo "Creating and starting PostgreSQL container '${PG_CONTAINER_NAME}'..."

docker run -d \
    --name ${PG_CONTAINER_NAME} \
    -p ${PG_PORT}:5432 \
    -e POSTGRES_USER=${PG_USER} \
    -e POSTGRES_PASSWORD=${PG_PASSWORD} \
    -e POSTGRES_DB=${PG_DATABASE} \
    postgres:latest

echo "PostgreSQL container '${PG_CONTAINER_NAME}' started successfully."

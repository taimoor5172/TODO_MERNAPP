# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory in the Docker image
WORKDIR /app

# Copy the application files into the Docker image
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
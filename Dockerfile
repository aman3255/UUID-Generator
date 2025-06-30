# Use full Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install all dependencies including devDependencies
RUN npm install

# Copy rest of the files
COPY . .

# Install nodemon globally (optional but good)
RUN npm install -g nodemon

# Default command for development
CMD ["npm", "run", "dev"]

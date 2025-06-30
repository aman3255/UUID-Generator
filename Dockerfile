# Use lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy rest of the app
COPY . .

# Set default command (change as needed)
CMD ["npm", "run", "dev"]

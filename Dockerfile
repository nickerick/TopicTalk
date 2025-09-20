# Use Node 20 image
FROM node:20-alpine

# Set work directory
WORKDIR /usr/src/app

# Copy entire project over
COPY . .

# Build app
RUN ./build.sh

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["node", "server/server.js"]
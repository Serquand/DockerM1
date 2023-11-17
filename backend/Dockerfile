# Basis image
FROM node:alpine

# Change the directory where we work in
WORKDIR /usr/src/app

# Install application dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose the PORT and start the frontend application
EXPOSE 3001
CMD ["node", "server.js"]
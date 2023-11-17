FROM node:alpine

# Change the directory where we work in
WORKDIR /app

# Add '/app/node_modules/.bin' to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install application dependencies
COPY package.json ./
RUN npm install

# Copy app files
COPY . .

# Expose the PORT and start the frontend application
EXPOSE 3000
CMD ["npm", "start"]
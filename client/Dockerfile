# Base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app files
COPY . .

# Build the app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Set the command to run the app
CMD ["npm", "start"]

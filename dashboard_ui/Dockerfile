# Step 1: Use Node to build the React app
FROM node:20-alpine AS builder

# Create a folder inside the container
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use NGINX to serve the build
FROM nginx:alpine

# Copy the built React app into NGINX's default folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Open port 80
EXPOSE 80

# Start NGINX when the container runs
CMD ["nginx", "-g", "daemon off;"]
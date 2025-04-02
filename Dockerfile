# Use the official Nginx image
FROM nginx:alpine

# Copy your custom Nginx configuration
COPY ./config/default.conf /etc/nginx/conf.d/default.conf

# Copy your static files into Nginx's default public folder
COPY ./public /usr/share/nginx/html

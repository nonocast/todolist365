FROM nginx:latest

WORKDIR /app
COPY ./src /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
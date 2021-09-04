FROM nginx:latest

WORKDIR /app
COPY ./build /var/www/console
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./bootstrap.sh /

EXPOSE 80
CMD ["/bin/bash", "/bootstrap.sh"]
FROM node:lts

ENV NODE_ENV=production
WORKDIR /app
COPY ./dist /app
RUN npm install yarn --registry https://registry.npm.taobao.org/; \
    yarn --registry https://registry.npm.taobao.org/
EXPOSE 3000
CMD [ "node", "./bundle.js" ]
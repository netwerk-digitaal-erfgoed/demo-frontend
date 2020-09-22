FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app/
COPY package*.json ./
RUN npm ci
COPY ./ /app
USER node
CMD ["node", "lib/server.js"]
EXPOSE 5501

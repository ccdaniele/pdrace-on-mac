# dev
FROM node:18
WORKDIR /pd-client-service
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3002
CMD npm run dev

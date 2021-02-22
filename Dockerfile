FROM node:14
# Create app directory
WORKDIR /usr/src/app

#Port to run the application on and API Keys from https://home.openweathermap.org/api_keys
ENV PORT=3000 API_KEY=api_key_from
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
EXPOSE 3080

CMD ["npm","start"]




FROM node

# Create server directory
WORKDIR /usr/app

# Install server dependencies
COPY package*.json ./

# If you are building for production
RUN yarn --only=production

# Bundle server source
COPY . .

COPY .env .

EXPOSE 8060
CMD ["yarn", "start"] 
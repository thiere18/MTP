FROM node:15.9.0

# Create app directory
RUN mkdir -p /home/node/mtp/node_modules && chown -R node:node /home/node/mtp

# Set working directory to app directory
WORKDIR /home/node/mtp

# Change the user to 'node'
USER node

# install dependencies
COPY --chown=node:node package*.json ./
RUN yarn && yarn cache clean --force

ENV PATH=/home/node/mtp/node_modules/.bin:$PATH

# Copy app source code
COPY --chown=node:node . .

#Expose port and start application
EXPOSE 5000

CMD [ "yarn", "run", "dev"]
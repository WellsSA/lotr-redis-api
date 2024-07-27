# Use the official Node.js image.
FROM node:22.5.1

# Create and change to the app directory.
WORKDIR /usr/src/app  # Corrigido para incluir a barra inicial

# Install app dependencies.
COPY package.json yarn.lock ./
RUN corepack enable
RUN yarn install

# Copy the rest of the application code.
COPY . .

# Build the TypeScript code.
# RUN yarn build

# Expose the port the app runs on.
EXPOSE 3000

# Define the command to run the app.
CMD [ "yarn", "start" ]
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# uninstall the current bcrypt modules
RUN npm uninstall bcrypt

# install the bcrypt modules for the machine
RUN npm install bcrypt

EXPOSE 3000

CMD [ "npm","run","start" ]


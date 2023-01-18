# Task-manager with expressJS and MongoDB

## Getting Started

### Setup

### ENV Variables
```
#Create .env file
touch .env

#Inside .env, set this variable.
MONGO_URI=your_own_link
```

### On local environment

```
#Install JS packages
yarn install
or
npm install

#Run a server 
npm or yarn start
```
Open http://localhost:3000

### Building With Docker

```
#Build an image
docker build -t <name of your app image> .

#Run the server
docker run -p <your preferred port>:3000 <the name of the app image>
```

Using Docker Compose

```
docker-compose up --build

#Open localhost:3000
```



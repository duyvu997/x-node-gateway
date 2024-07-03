# x-node-gateway

This project serves as a gateway using Node.js, integrating GraphQL for frontends and gRPC for services.

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:duyvu997/x-node-gateway.git

cd x-node-gateway

npm install
```

### Running the Project Locally

To run the project locally, use:

```bash 
npm start
```

This will start the Node.js server locally.

### Building for Production

To build the project for production, use:

```bash 
npm run build
```
This will compile TypeScript files and generate the production build.

### Additional Notes


#### environment
- Modify environment variables in .env file as needed.
    ```bash 
    cp env.example .env
    ```


#### graphql generation

1. modify the `schema.graphql` to add/edit/delete functions. 
2. run `npm run generate:graphql` to generate resolver in typescript\

#### grpc generation

proto to client's files: `.proto => .js/.ts`
```bash
cd src/grpc 

chmod +x ./generate-protobuf-ts.sh

./generate-protobuf-ts.sh
```


.js/.ts to cjs files: `.js/ts => .cjs`
```bash
cd src/grpc 

chmod +x ./rename-generated-files.sh

./rename-generated-files.sh
```

or just keep it's simple, run: 

```sh
npm run generate:grpc
```


#### others 
For more details on specific scripts and configurations, refer to package.json and other configuration files.
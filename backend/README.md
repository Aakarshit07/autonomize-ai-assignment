# Backend Project

This project is a Node.js-based backend application using TypeScript, Express.js, MongoDB with Mongoose, Swagger UI for API documentation, and other related dependencies.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB (v4.x or higher)

### Installation

## Clone the repository:
```
git clone https://github.com/Aakarshit07/autonomize-ai-assignment.git

cd backend

```

## Install dependencies:

```
npm install

Available Scripts

In the project directory, you can run:
```

## Development Server with Nodemon:

```
npm run dev

Starts the development server using Nodemon with TypeScript support.
```

## Build:

```
npm run build

Installs dependencies and compiles TypeScript files to JavaScript.
```

## Start Server:

```
npm start

Starts the server in production mode.
```

## Generate Swagger Documentation:

```
npm run generate-swagger

Generates Swagger documentation using ts-node.
```

## Dependencies
- cookie-parser: Parses cookies attached to the client request object.
- cors: Enables Cross-Origin Resource Sharing (CORS) for Express middleware.
- dotenv: Loads environment variables from a .env file into process.env.
- express: Fast, unopinionated, minimalist web framework for Node.js.
- joi: Schema description language and data validator for JavaScript.
- mongodb: Official MongoDB driver for Node.js.
- mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
- swagger-ui-express: Express middleware to serve auto-generated Swagger UI.

## Development Notes
- Utilize TypeScript for type safety and enhanced developer experience.
- Implement middleware such as CORS and cookie-parser for security and functionality.
- Use Mongoose for interacting with MongoDB to define schemas and models.
- Document APIs using Swagger for clear documentation and easy integration.
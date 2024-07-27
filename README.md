# Lord of the Rings Themed API

A simple API built with Node.js and Redis, themed around the Lord of the Rings. This project is intended for educational purposes, demonstrating how to build a modular Node.js API.

## Table of Contents

- [Installation](#installation)
- [Running the API](#running-the-api)
- [API Documentation](#api-documentation)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```
git clone https://github.com/your-username/lotr-api.git
cd lotr-api
yarn
```

## Running the API

1. Ensure you have Docker installed and running.
2. Start the Redis container using Docker Compose:

```
docker-compose up -d
```

3. Start the Node.js application:

```
yarn start
```

The API will be running at `http://localhost:3000`.

## API Documentation

### Base URL

`http://localhost:3000/api`

### Endpoints

View the [HTML Docs here](/apiary.html)

## Running Tests

To run the unit tests, use the following command:

```
yarn test
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

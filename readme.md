# Project Setup

## Overview

This project involves setting up a PostgreSQL database using Docker and running a Node.js application with Express, PostgreSQL, and Sequelize ORM.

## Requirements

- Docker
- Node.js (v18.16 or higher)
- PostgreSQL (Running in Docker)
- npm (v10.8.2 or higher)

## Getting Started

### 1. Database Setup

To set up and run a PostgreSQL database in a Docker container, use the following command:

```bash
docker run --name systemtest -p 5432:5432 -e POSTGRES_PASSWORD=Password -d postgres
```

This will create a PostgreSQL container named `systemtest` and expose it on port 5432 with the password `Password`.

### 2. Install Node Modules

After cloning the repository, navigate to the project directory and install the required npm packages by running:

```bash
npm install
```

### 3. Running the Project

To start the Node.js server, use the following command:

```bash
node server.js
```

Ensure that your PostgreSQL container is running and properly configured before starting the application.

## Environment Variables

Make sure to create a `.env` file to configure the database connection if needed, with variables like:

```bash
PORT = 4800
DB_HOST= localhost
DB_PORT= 5432
DB_USERNAME = postgres
DB_PASSWORD =Password
DB_DATABASE =postgres
```

## Dependencies

- [Express](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- Other dependencies listed in `package.json`

## Additional Notes

- For database migrations and seeding, refer to the Sequelize documentation.
- Ensure that the PostgreSQL container is running when starting the server.
- If you're using a different database configuration, adjust your `.env` file accordingly.

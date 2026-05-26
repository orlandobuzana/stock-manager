# Dental Stock Manager

This is a MERN stack web application for managing dental product stocks.

## Project Structure

- **/server**: Contains Node.js/Express server, Mongoose models.
- **/client**: Contains React app using a Vite-style structure, Bootstrap for styling.

## Setup

1. Clone the repository.
2. Navigate to both `/server` and `/client` folders and run `npm install` in each.
3. Create a `.env` file in the `/server` folder with your configuration (e.g., Mongo URI).

## Running the App

Use the following command to start the application:

```bash
npm run dev
```

This will concurrently start both the client and the server.

## Technologies Used

- **React** for the client-side framework.
- **Express** for the server framework.
- **Mongoose** for MongoDB object modeling.
- **Bootstrap** for styling.
- **Concurrently** for running server and client in parallel.
- **Vite** for the build tool.

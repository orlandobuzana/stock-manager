# Dental Stock Manager

A stock management app for dental practices. It tracks dental product inventory — each product has a name, quantity in stock, and price — displayed in a simple web UI backed by a MongoDB database.

## What it does

- **Product inventory list** — the React frontend (`client/src/App.jsx`) fetches the product list from `/api/products` and renders each item's name, quantity in stock, and price in a Bootstrap list.
- **MongoDB persistence** — the Express backend (`server/app.js`) connects to MongoDB and loads a Mongoose `Product` model (`server/models/Product.js`). A `GET /` route returns a welcome message.
- **Product model** — `name` (String, required), `quantity` (Number, required), `price` (Number, required).

> Note: the app is an early-stage scaffold — the frontend calls `/api/products`, but that route is not yet implemented in the backend (the code has an `// API routes here` placeholder), so the list will be empty until the route is added.

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React, Vite, Bootstrap |
| Backend | Node.js, Express |
| Database | MongoDB (via Mongoose) |
| Config | dotenv (environment variables) |
| Dev tooling | concurrently, nodemon |

## Project structure

```
stock-manager/
├── client/               # React frontend (Vite-style structure)
│   ├── index.html
│   └── src/
│       ├── App.jsx       # Product list UI (fetches /api/products)
│       └── main.jsx
├── server/               # Express backend
│   ├── app.js            # Server entry point (MongoDB connection, routes)
│   └── models/
│       └── Product.js    # Mongoose Product schema (name, quantity, price)
└── package.json          # Scripts + dependencies for both apps
```

## How to run it locally

### Prerequisites

- Node.js and npm
- A MongoDB instance you can connect to (local or hosted)

### Steps

1. Clone the repository and enter it:

   ```bash
   git clone https://github.com/orlandobuzana/stock-manager.git
   cd stock-manager
   ```

2. Install dependencies (both apps' dependencies are declared in the root `package.json`):

   ```bash
   npm install
   ```

3. Create a `.env` file at the repo root with your MongoDB connection string. The server reads `process.env.MONGO_URI` (via `dotenv`); the API port defaults to `5000` and can be overridden with `PORT`:

   ```
   MONGO_URI=mongodb://localhost:27017/dental-stock
   ```

4. Start the backend and frontend together:

   ```bash
   npm run dev
   ```

   This uses `concurrently` to run the Express server (`nodemon server/app.js`) and the Vite dev server (`vite client`) in parallel. Open the Vite dev server URL in your browser to see the "Dental Stock Manager" product list.

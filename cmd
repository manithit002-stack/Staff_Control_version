<!-- app.js -->

This file is where you define your API.
It should contain:

Creation of the Express app

Middlewares (like JSON parsing, CORS, logging)

All API routes (e.g., /api/health, later /api/auth, /api/staff)

Optional error handling

👉 Think of app.js as the blueprint of your server — what it can do


<!-- index.js -->

This file is the startup script.
It should contain:

Import of the Express app (from app.js)

Connection to MongoDB (and any other startup tasks)

Starting the server with app.listen on the configured port

👉 Think of index.js as the engine starter — it turns everything on and gets your API running.

<!-- In short: -->

app.js = define the server (routes, middlewares, error handling)

index.js = start the server (connect DB, open port, run app)
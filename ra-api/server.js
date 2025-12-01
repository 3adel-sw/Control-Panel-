const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// Ensure the X-Total-Count and Link headers are exposed for CORS
server.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "X-Total-Count, Link");
  next();
});

// Mount router
server.use(router);

const port = process.env.PORT || 3004;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

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

// Transform responses: add `id` field for actors from `actorId` so react-admin can use it
router.render = (req, res) => {
  const path = req.path || req.originalUrl || "";
  const data = res.locals.data;
  if (path.startsWith("/actors")) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        if (item && item.actorId && !item.id) item.id = item.actorId;
      });
    } else if (data && data.actorId && !data.id) {
      data.id = data.actorId;
    }
  }
  res.jsonp(data);
};

// Mount router
server.use(router);

const port = process.env.PORT || 3004;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

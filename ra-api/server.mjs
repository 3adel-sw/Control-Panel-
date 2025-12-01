import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Expose X-Total-Count and Link headers so the browser can read them
server.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "X-Total-Count, Link");
  next();
});

server.use(router);

const port = process.env.PORT || 3004;
server.listen(port, () => {
  console.log(`JSON Server (ESM) is running on port ${port}`);
});

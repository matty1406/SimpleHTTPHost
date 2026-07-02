const httpServer = require("http-server");

const port = Number(process.env.PORT || process.env.SERVER_PORT || 3000);

const server = httpServer.createServer({
  root: "."
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Static site running on port ${port}`);
});
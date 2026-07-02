const { spawn } = require("child_process");

const port = process.env.PORT || process.env.SERVER_PORT || 3000;

const server = spawn("npx", ["http-server", ".", "-p", port], {
  stdio: "inherit",
  shell: true
});

server.on("close", (code) => {
  process.exit(code);
});
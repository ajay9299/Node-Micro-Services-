import gateway from "fast-gateway";
const server = gateway({
  routes: [
    {
      prefix: "/user",
      target: "http://localhost:3001",
    },
    {
      prefix: "/product",
      target: "http://localhost:3002",
    },
    {
      prefix: "/userManagement",
      target: "http://localhost:3003",
    },
  ],
});

server.start(3000).then(() => {
  console.log("Server Up");
});

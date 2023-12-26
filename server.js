const app = require("./app");
const os = require("os");
const networkInterfaces = os.networkInterfaces();

//For network ip address
const ip = Object.values(networkInterfaces)
  .flat()
  .find((iface) => iface.family === "IPv4" && !iface.internal)?.address;

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

const PORT = process.env.PORT || 4000;

//Initialize server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://${ip}:${PORT}`);
});

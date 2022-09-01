const env = require("dotenv").config({ path: "./config.env" });
require("./config/database");
const app = require("./middleware/app");
const port = process.env.PORT || 8000;


app.listen(port, function () {
  console.log(`Server is listening on ${port}`);
});

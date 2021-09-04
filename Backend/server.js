const express = require("express");
const app = express();
const user = require("./Routers/user");
var bodyParser = require("body-parser");
var cors = require("cors");


app.use(bodyParser.json());
app.use(cors());
app.use("/user", user);




const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

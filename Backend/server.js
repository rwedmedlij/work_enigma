const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())


const user = require("./Routers/user");




app.use("/user", user);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

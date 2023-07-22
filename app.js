const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const cron = require('node-cron');
const fs = require("fs");
require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
    type: "application/x-www-form-urlencoded",
  })
);

// app.use(express.static(`${__dirname}/uploads`));
// app.use(cors());

const router = require("./routes/index");

app.use("/api", router);

app.get("/app", (req, res) => {
  res.send("PeopleSearch - Version - 2.1.5");
});

// const error = process.on('uncaughtException', (err, req, res) => {
//   if (err) {
//     console.log(err)
//     process.exit(1);
//   }
//   // console.error('There was an uncaught error in database', err)
//   // process.exit(1) //mandatory (as per the Node.js docs)
// })

// cron.schedule('*/5 * * * * *', () => {
//   
// });
// const companyDataMigration = company();

app.listen(3001, () => console.log("Server running on port 3001! - Version - 2.1.5 "));


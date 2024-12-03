
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
mongoose.Promise = global.Promise;

const NewPatients = require("./routes/patients.add");
const Newdoctor = require("./routes/doctor.add");
const User = require("./routes/user");
const Payment = require("./routes/payment");
const Appointment = require("./routes/Appointment");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
app.use(express.json());
const mongoose = require("mongoose");


app.use("/api/v1/users", Newdoctor);
app.use("/api/v1/users", NewPatients);
app.use("/api/v1/users", User);
app.use("/api/v1/users", Payment);
app.use("/api/v1/users", Appointment);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running at port ${port} !!`);
});

module.exports = app;


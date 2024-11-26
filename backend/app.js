const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
app.use(express.json());
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const NewPatients = require("./routes/patients.add.js");
const Newdoctor = require("./routes/doctor.add.js");
const User = require("./routes/user.js");
const Payment = require("./routes/payment.js");
const Appointment = require("./routes/Appointment.js");

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

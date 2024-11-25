const mongoose = require("mongoose");

const NewPatients = new mongoose.Schema(
  {
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 120,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
      type: String,
    },
    file: {
      type: Buffer,
    },
  },
  { timestamps: true }
});

module.exports = mongoose.model("patients.add", NewPatients);


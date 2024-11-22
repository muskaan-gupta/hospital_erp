const express = require("express");
const Patient = require("../models/payment");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save(); // Middleware will generate patientId

    // Return the saved patient
    res.status(201).json({
      message: "Patient record created successfully",
      data: savedPatient,
    });
  } catch (error) {
    console.error("Error creating patient record:", error);
    res.status(500).json({
      message: "Failed to create patient record",
      error: error.message,
    });
  }
});

module.exports = { router };

const express = require("express");
const Payment = require("../models/payment");
const { getNextSequence } = require("../counter");
const { asynchandler } = require("../asynchandler");
const router = express.Router();

router.post("/addpayment", async (req, res) => {
  try {
    const {
      patientId,
      patientName,
      department,
      doctorName,
      admissionDate,
      dischargeDate,
      serviceName,
      costOfTreatment,
      discount,
      advancePaid,
      cardOrCheckNo,
    } = req.body;
    const newPayment = new Payment({
      patientId,
      patientName,
      department,
      doctorName,
      admissionDate,
      dischargeDate,
      serviceName,
      costOfTreatment,
      discount,
      advancePaid,
      cardOrCheckNo,
    });

    const savedPayment = await newPayment.save();

    res.status(201).json({
      message: "Appointment created successfully.",
      appointment: savedAppointment,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({
      message: "Failed to create appointment.",
      error: error.message,
    });
  }
});

router.get("/Pay", async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({
      message: "Failed to fetch payments.",
      error: error.message,
    });
  }
});

module.exports = router;

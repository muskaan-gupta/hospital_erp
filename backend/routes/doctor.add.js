const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const NewDoctor = require("../models/doctor.add");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/add", upload.single("file"), async (req, res) => {
  try {
    const {
      name,
      age,
      experience,
      specialization,
      dob,
      email,
      doctorDetails,
      address,
    } = req.body;

    const newDoctor = new NewDoctor({
      name,
      age,
      experience,
      specialization,
      dob,
      email,
      doctorDetails,
      address,
    });

    if (req.file) {
      newDoctor.file = req.file.buffer;
    }

    await newDoctor.save();

    res.status(201).json({
      message: "Doctor added successfully.",
      doctor: newDoctor,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists." });
    }
    res.status(500).json({
      error: "An error occurred while adding the doctor.",
      details: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const doctors = await NewDoctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching doctors.",
      details: error.message,
    });
  }
});

module.exports = { router };

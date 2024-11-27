const mongoose = require("mongoose");

const PaymentRecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
    },
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    admissionDate: {
      type: Date,
      required: true,
    },
    dischargeDate: {
      type: Date,
    },
    serviceName: {
      type: String,
      required: true,
    },
    costOfTreatment: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0, // Default discount to 0%
      min: 0,
      max: 100,
    },
    advancePaid: {
      type: Number,
      default: 0,
      min: 0,
    },
    cardOrCheckNo: {
      type: String,
      maxlenght: 15,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment", PaymentRecordSchema);

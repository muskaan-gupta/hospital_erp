const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema({
  seqName: { type: String, required: true, unique: true },
  seqValue: { type: Number, default: 101 },
});

const Counter = mongoose.model("Counter", CounterSchema);

const PatientRecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      unique: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    department: {
      type: String,
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
      required: true,
      min: 0,
    },
    cardOrCheckNo: {
      type: String,
      maxLength: 100,
    },
  },
  { timestamps: true }
);

// Middleware to auto-generate ordered patientId
PatientRecordSchema.pre("save", async function (next) {
  if (!this.patientId) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { seqName: "patientId" },
        { $inc: { seqValue: 1 } },
        { new: true, upsert: true }
      );

      this.patientId = `PAT_${counter.seqValue}`;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model("payment", PatientRecordSchema);

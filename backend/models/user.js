const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userschema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    username: {
      type: String,
      unique: true,
      minlength: 4,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum password length
    },
    confirmPassword: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Passwords don't match",
      },
    },
  },
  { timestamps: true }
);

userschema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userschema.methods.isPasswordCorrect = async function (password) {
  console.log(password);
  console.log(this.password);

  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("user", userschema);

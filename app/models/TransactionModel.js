const mongoose = require("mongoose");

let schema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    validate(year) {
      if (year < 2019 || year > 2021)
        throw new Error("Valor de year deve estar entre 2019 e 2021");
    },
  },
  month: {
    type: Number,
    required: true,
    validate(month) {
      if (month < 0 || month > 12)
        throw new Error("Valor de month deve estar entre 0 e 12");
    },
  },
  day: {
    type: Number,
    required: true,
  },
  yearMonth: {
    type: String,
    required: true,
  },
  yearMonthDay: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const TransactionModel = mongoose.model("transaction", schema);

module.exports = TransactionModel;

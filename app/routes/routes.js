const express = require("express");
const transactionRouter = express.Router();

const transactionService = require("../services/transactionService");

transactionRouter.get("/", transactionService.findAll);
transactionRouter.get("", transactionService.findByPeriod);
transactionRouter.get("/:description", transactionService.findByDescription);
transactionRouter.post("/", transactionService.create);
transactionRouter.put("/:id", transactionService.update);
transactionRouter.delete("/:id", transactionService.remove);

module.exports = transactionRouter;

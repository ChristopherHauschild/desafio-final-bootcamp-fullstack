const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const TransactionModel = require("../models/TransactionModel");

const findAll = async (req, res) => {
  try {
    const transactions = await TransactionModel.find();

    if (!transactions) {
      res.statusMessage(404).send("Erro ao listar os dados");
    }

    res.send(transactions);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Algum erro ocorreu ao buscar os dados",
    });
  }
};

const findByPeriod = async (req, res) => {
  try {
    const params = req.query;

    const transactions = await TransactionModel.find({
      yearMonth: params.period,
    });

    if (!transactions) {
      res
        .statusMessage(404)
        .send(
          'É necessário informar o parâmetro "period", cujo valor deve estar no formato yyyy-mm'
        );
    }

    res.send(transactions);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Algum erro ocorreu ao buscar os dados",
    });
  }
};

const findByDescription = async (req, res) => {
  try {
    const params = req.params;

    const transactions = await TransactionModel.find({
      description: params.description,
    });

    if (!transactions) {
      res.statusMessage(404).send('Parâmetro "description" não informado');
    }

    res.send(transactions);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Algum erro ocorreu ao buscar os dados",
    });
  }
};

const create = async (req, res) => {
  try {
    const transactions = new TransactionModel(req.body);
    await transactions.save();

    res.send(transactions);
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Algum erro ocorreu ao buscar inserir um novo registro",
    });
  }
};

const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;

    const transactions = await TransactionModel.findOneAndUpdate(
      { _id: params.id },
      body,
      { new: true }
    );

    if (!transactions) {
      res.status(404).send("Transação não encontrada.");
    }

    res.send(transactions);
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Algum erro ocorreu ao buscar inserir um novo registro",
    });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;

    const transactions = await TransactionModel.findOneAndRemove({
      _id: params.id,
    });

    if (!transactions) {
      res.status(404).send("Transação não encontrada.");
    }

    res.status(200).status("Transação removida com sucesso!");
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Algum erro ocorreu ao buscar inserir um novo registro",
    });
  }
};

module.exports = {
  findAll,
  findByPeriod,
  findByDescription,
  create,
  update,
  remove,
};

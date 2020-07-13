import axios from "axios";

const URL = "https://localhost:3001/api/transaction";

const getAll = async () => {
  const res = await axios.get(URL);

  const transactions = res.data.map((transaction) => {
    return { ...transaction };
  });

  return transactions;
};

const getByDescription = async (description) => {
  const res = await axios.get(`${URL}/${description}`);

  const transactions = res.data.map((transaction) => {
    return { ...transaction };
  });
  return transactions;
};

const insertTransaction = async (transaction) => {
  try {
    const res = await axios.post(URL, transaction);
    return res.data;
  } catch (e) {
    console.log(e.response);
  }
};

const updateTransaction = async (transaction, id) => {
  try {
    const res = await axios.put(`${URL}/${id}`, transaction);
    return res.data;
  } catch (e) {
    console.log(e.response);
  }
};

const deleteTransaction = async (id) => {
  try {
    const res = await axios.delete(`${URL}/${id}`);
    return res.data;
  } catch (e) {
    console.log(e.response);
  }
};

export {
  getAll,
  getByDescription,
  insertTransaction,
  deleteTransaction,
  updateTransaction,
};

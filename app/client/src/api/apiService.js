import axios from "axios";

const URL = "http://localhost:3001/api/transaction/";

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

const getByYearMonth = async (yearMonth) => {
  const res = await axios.get(`${URL}/${yearMonth}`);

  const transactions = res.data.map((transaction) => {
    return { ...transaction };
  });
  return transactions;
};

export { getAll, getByDescription, getByYearMonth };

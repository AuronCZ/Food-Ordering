import db from "../config/database.js";

const handleQueryResult = (err, results, result) => {
  if (err) {
    console.log(err);
    result(err, null);
  } else {
    result(null, results);
  }
};

export const insertBillDetails = (data, result) => {
  db.query("INSERT INTO billdetails SET ?", data, (err, results) => {
    handleQueryResult(err, results, result);
  });
};

export const getBillDetails = (id, result) => {
  db.query("SELECT * FROM billdetails WHERE bill_id = ?", id, (err, results) => {
    handleQueryResult(err, results, result);
  });
};

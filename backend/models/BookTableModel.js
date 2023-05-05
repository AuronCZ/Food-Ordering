import db from "../config/database.js";

const handleQueryResult = (err, results, result) => {
  if (err) {
    console.log(err);
    result(err, null);
  } else {
    result(null, results);
  }
};

export const insertBooking = (data, result) => {
  db.query("INSERT INTO booktable SET ?", data, (err, results) => {
    handleQueryResult(err, results, result);
  });
};

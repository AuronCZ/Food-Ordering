import {
    getNewestId,
    insertBillStatus,
    getBillsByUser,
    getBillsByBill,
    getAll,
    updateStatus,
    updatePaid,
    cancelStatus
  } from "../models/BillStatusModel.js";
  
  function sendResponse(res, err, results) {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  }
  
  export function showNewestStatusId(req, res) {
    getNewestId((err, results) => {
      sendResponse(res, err, results);
    });
  }
  
  export function createBillStatus(req, res) {
    const data = req.body;
    insertBillStatus(data, (err, results) => {
      sendResponse(res, err, results);
    });
  }
  
  export function getAllBillsByUser(req, res) {
    getBillsByUser(req.params.id, (err, results) => {
      sendResponse(res, err, results);
    });
  }
  
  export function getAllBillsByBill(req, res) {
    getBillsByBill(req.params.id, (err, results) => {
      sendResponse(res, err, results);
    });
  }
  
  export function getAllBills(req, res) {
    getAll((err, results) => {
      sendResponse(res, err, results);
    });
  }
  
  export function updateBillStatus(req, res) {
    updateStatus(req.params.id, (err, results) => {
      sendResponse(res, err, results);
    });
  }
  
  export function updateBillPaid(req, res) {
    updatePaid(req.params.id, (err, results) => {
      sendResponse(res, err, results);
    });
  }
  
  export function cancelBillStatus(req, res) {
    cancelStatus(req.params.id, (err, results) => {
      sendResponse(res, err, results);
    });
  }
  
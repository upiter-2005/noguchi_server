const { Router } = require("express");
const { createOrder, getOrders } = require("../controllers/order.js");
// const checkAuth = require("../utils/checkAuth.js");

const router = Router();
// /api/options/getTree
router.post("/createOrder", createOrder);
router.get("/getOrders", getOrders);

// /api/options/setTree
//router.patch("/setTree", checkAuth, setTree);

module.exports = router;

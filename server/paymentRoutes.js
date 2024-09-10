import express from "express";
import { checkout } from "./paymentController.js";
import { paymentVerification } from "./paymentController.js";

const router = express.Router();

router.post("/checkout", checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;
// paymentRoutes.js
import express from "express";
import { checkout, paymentVerification } from "./paymentController.js"; // Correct imports

const router = express.Router();

router.post("/checkout", checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;

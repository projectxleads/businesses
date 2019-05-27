import express from "express";
import moneyRouter from "../api_routes/money/money.route";

const router = express.Router();

router.use(moneyRouter);

export default router;

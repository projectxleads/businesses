import express from "express";
import MoneyController from "../../controllers/money/money.controller";

const moneyRouter = express.Router();
const uri = "/money";
const controller = new MoneyController();

moneyRouter.get(uri, controller.getMonies);
moneyRouter.get(`${uri}/:id`, controller.getMoney);
moneyRouter.post(uri, controller.addMoney);
moneyRouter.put(`${uri}/:id`, controller.updateMoney);
moneyRouter.delete(`${uri}/:id`, controller.deleteMoney);

export default moneyRouter;

import {AutoWired, Inject} from "typescript-ioc";
import MoneyLogic from "../../../application/logic/money/money.logic";

class MoneyController {
  moneyLogic: MoneyLogic;
  constructor() {
    console.log('Here');
    this.moneyLogic = new MoneyLogic();
  }
  getMonies = (req: any, res: any) => {
    console.log("Get Monies from Money Controller");
    this.moneyLogic.getMonies().then((monies) => {
      console.log("\t- Successfully got monies from  Money Controller");
      res.send(monies);
    });
  }

  public getMoney(req: any, res: any) {
    res.send("Get Money from controller");
  }

  public addMoney(req: any, res: any) {
    res.send("POST Money from controller");
  }

  public updateMoney(req: any, res: any) {
    res.send("PUT Money from controller");
  }

  public deleteMoney(req: any, res: any) {
    res.send("Delete Money from controller");
  }
}

export = MoneyController;

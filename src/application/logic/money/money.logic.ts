import Money from "../../../domain/money/money.model";
import MoneyDto from "../../models/dtos/money/money.dto";
import {AutoWired, Inject} from "typescript-ioc";

class MoneyLogic {
  public getMonies(): Promise<MoneyDto[]> {
    console.log("Get Monies Logic");
    return Money.find().then((monies) => {
      console.log("\t- Successfully got monies from Money Logic");
      const moneyDto = monies.map((money: any) => {
        return { id: money.id, name: money.name, description: money.description};
      });
      return moneyDto;
    });
  }
}

export = MoneyLogic;

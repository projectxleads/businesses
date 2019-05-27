class MoneyController {
  public getMonies(req: any, res: any) {
    console.log('Get Monies');
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

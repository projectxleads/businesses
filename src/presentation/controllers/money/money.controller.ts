class MoneyController {
  getMonies(req: any, res: any) {
    res.send('Get Monies from controller')
  }

  getMoney(req: any, res: any) {
    res.send('Get Money from controller')
  }

  addMoney(req: any, res: any) {
    res.send('POST Money from controller');
  }

  updateMoney(req: any, res: any) {
    res.send("PUT Money from controller");
  }

  deleteMoney(req: any, res: any) {
    res.send('Delete Money from controller');
  }
}

export = MoneyController;


const moneyLogic = require('../../../application/logic/money/money.logic')

exports.getMonies = (req, res, next) => {
  console.log('getMonies: ');
  moneyLogic.getMonies()
    .then(monies => {
      // TODO: Map models
      res.send(monies)
    })
    .catch(err => console.log(err));
}

exports.getMoney = (req, res, next) => {
  moneyLogic.getMoney(req.params.id)
    .then(money => {
      // TODO: Map model
      res.send(money);
    })
    .catch(err => console.log(err));
}

exports.addMoney = (req, res, next) => {
  moneyLogic.addMoney(req.body)
    .then(money => {
      // TODO: Map model
      res.location(req.url).status(201).send(money);
    })
    .catch(err => { 
      console.log(err)
      res.status(500).send();
    });
}

exports.updateMoney = (req, res, next) => {
  res.send("Updated Money");
}

exports.deleteMoney = (req, res, next) => {
  res.status(204).send();
}
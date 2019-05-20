const Money = require('../../../domain/money/money.model');

exports.getMonies = () => {
  return Money.find();
}

exports.getMoney = (id) => {
  return Money.findById(id);
}

exports.addMoney = reqBody => {
  const money = new Money({
    name: reqBody.name,
    description: reqBody.description,
    businesses: reqBody.businesses
  });

  return money.save();
}

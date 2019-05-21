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

exports.updateMoney = (id, reqBody) => {
  console.log('Updating Money: ')
  Money.findById(id)
    .then(money => {
      if (!money)
        return;
      money.name = reqBody.name;
      money.description = reqBody.description;
      money.businesses = reqBody.businesses;
      return money.save();
    })
    .then(result => {
      console.log('\t- Successfully updated Money.');
    })
    .catch(err => console.log('\t- Failed to update Money'));
}

exports.delete = id => {
  Money.findByIdAndRemove(id);
}
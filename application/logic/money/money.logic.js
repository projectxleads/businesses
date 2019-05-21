const Money = require('../../../domain/money/money.model');

exports.getMonies = () => {
  console.log("Get Monies:");
  return Money.find().then(money => {
    console.log('\t- Successfully got monies');
    return money;
  });
}

exports.getMoney = (id) => {
  console.log('Get Money:');
  return Money.findById(id).then(money => {
    console.log('\t- Successfully got money');
    return money;
  })
  .catch(err => console.log(err));
}

exports.addMoney = reqBody => {
  console.log("Adding Money: ")
  const money = new Money({
    name: reqBody.name,
    description: reqBody.description,
    businesses: reqBody.businesses
  });

  return money.save()
    .then(money => {
      console.log('\t- Successfully added money')
      return money;
    })
    .catch(err => console.log(err));
}

exports.updateMoney = (id, reqBody) => {
  console.log('Updating Money: ')
  return Money.findById(id)
    .then(money => {
      if (!money)
        return;
      money.name = reqBody.name;
      money.description = reqBody.description;
      money.businesses = reqBody.businesses;
      return money.save();
    })
    .then(money => {
      console.log('\t- Successfully updated Money.');
      return money;
    })
    .catch(err => console.log(err));
}

exports.deleteMoney = (id) => {
  console.log('Deleting Money: ');
  return Money.findByIdAndDelete(id)
    .then(deletedMoney => {
      console.log('\t- Successfully deleted Money');
      return deletedMoney;
    })
    .catch(err => console.log(err));
}
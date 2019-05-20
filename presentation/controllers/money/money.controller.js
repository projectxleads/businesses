

exports.getMonies = (req, res, next) => {
  console.log('getMonies: ');
  res.send("GET Monies")
}

exports.getMoney = (req, res, next) => {
  res.send("GET Money")
}

exports.addMoney = (req, res, next) => {
  res.status(201).send("Added money");
}

exports.updateMoney = (req, res, next) => {
  res.send("Updated Money");
}

exports.deleteMoney = (req, res, next) => {
  res.status(204).send();
}
const moneyRouter = require('../api_routes/money/money.route');


module.exports = function(app) {
  app.use(moneyRouter);
}

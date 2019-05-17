const Business = require('../../../domain/business/business.model');

seed = () => {
  console.log('Seeding Business');
  return Business.findOne().then(business => {
    if (!business) {
      // business = new Business({
      //   name: "Outsurance",
      //   description: 'This Outsurance car insurance'
      // }); 
      // return business.save();
      Business.insertMany([
        { name: "Outsurance", description: 'This is Outsurance business'},
        { name: 'Budget', description: 'This is Budgets business' },
        { name: 'Capitec', description: 'This is Capitec business' },
        { name: 'Nedbank', description: 'This is Nedbank business' }
      ]);
    }
  })
    .then(() => console.log('\t- Business seed succeeded'))
    .catch(err => console.log('\- Business seed failed:', err));
}

module.exports = seed;
const Insurance = require('../../domain/insurance/insurance.model');

seed = () => {
  console.log('Seeding Insurance');
  return Insurance.findOne().then(insurance => {
    if (!insurance) {
      const insurance = new Insurance({
        name: 'Car'
      });
      return insurance.save();   // this does return a promise I think without having to call return
    }
  }).then(result => {
    console.log('\t- Insurance seed succeeded');
  })
  .catch(err => console.log('\t- Insurance seed failed: ', err));
  
}

module.exports = seed;
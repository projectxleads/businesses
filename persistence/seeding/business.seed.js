const InsuranceBusiness = require('../../domain/insurance/entities/insurance-business.model');

seed = () => {
  console.log('Seeding Insurance Business');
  return InsuranceBusiness.findOne(business => {
    if (!business){
      business = new InsuranceBusiness({
        name: "Outsurance"
      }); 
      return business.save();
    }
  })
  .then(() => console.log('\t- Insurance Business seed succeeded'))
  .catch(err => console.log('Insurance Business seed failed:', err));
}

module.exports = seed;
const insuranceSeed = require('./insurance/insurances.seed');
const businessSeed = require('./business/business.seed');
const businessTypeSeed = require('./business-type/business-type.seed');
const broadbandSeed = require('./broadband/broadband.seed');

seed = () => {
  // Just Keep in mind of relations. Then order of seeding will matter
  return insuranceSeed()
    .then(() => businessSeed())
    .then(() =>  businessTypeSeed())
    .then(() => broadbandSeed());

}

module.exports = seed;
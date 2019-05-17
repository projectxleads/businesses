const insuranceSeed = require('./insurances.seed');
const businessSeed = require('./business.seed');

seed = () => {
  // Just Keep in mind of relations. Then order of seeding will matter
  return insuranceSeed()
    .then(() => {
      return businessSeed();
    });

}

module.exports = seed;
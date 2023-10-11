const { User } = require('../models');

const registerUser = async (firstName, lastName, role, email) => (
    User.create({ firstName, lastName, role, email })
  );

module.exports = {
    registerUser
};

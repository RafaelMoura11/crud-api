const { User } = require('../models');

const registerUser = async (firstName, lastName, role, email) => (
    User.create({ firstName, lastName, role, email })
  );

const findUserById = async (id) => (
  User.findOne({ where: { id } })
);

const updateUser = async (id, firstName, lastName, role, email) => (
  User.update({ firstName, lastName, role, email }, { where: { id } })
);

module.exports = {
    registerUser,
    updateUser,
    findUserById
};

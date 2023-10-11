const { User } = require('../models');

const registerUser = async (firstName, lastName, role, email) => (
    User.create({ firstName, lastName, role, email })
  );

const findUserById = async (id) => (
  User.findOne({ where: { id } })
);

const findUsers = async (id) => (
  User.findAll()
);

const updateUser = async (id, firstName, lastName, role, email) => (
  User.update({ firstName, lastName, role, email }, { where: { id } })
);

const deleteUser = async(id) => User.destroy({ where: { id } });

module.exports = {
    registerUser,
    updateUser,
    findUserById,
    findUsers,
    deleteUser
};

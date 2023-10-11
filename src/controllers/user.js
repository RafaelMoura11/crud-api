const service = require('../services/user');

const registerUser = async (req, res) => {
    const { firstName, lastName, role, email } = req.body;
  
    await service.registerUser(firstName, lastName, role, email);
  
    return res.status(201).json(`O usuário ${firstName} ${lastName} foi criado com sucesso!`);
  };

const findUserById = async (req, res) => {
  const { id } = req.params;
  
  const user = await service.findUserById(id);
  return res.status(200).json(user);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, role, email } = req.body;

    const userExists = await service.findUserById(id);

    if (userExists) {
      await service.updateUser(id, firstName, lastName, role, email);
      return res.status(200).json(`O usuário ${firstName} ${lastName} foi atualizado com sucesso!`);
    }
    return res.status(404).json("Usuário não existe!");
}

module.exports = {
    registerUser,
    updateUser,
    findUserById
};

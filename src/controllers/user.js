const service = require('../services/user');

const registerUser = async (req, res) => {
    const { firstName, lastName, role, email } = req.body;
  
    await service.registerUser(firstName, lastName, role, email);
  
    return res.status(201).json(`O usuário ${firstName} ${lastName} foi criado com sucesso!`);
  };

module.exports = {
    registerUser
};

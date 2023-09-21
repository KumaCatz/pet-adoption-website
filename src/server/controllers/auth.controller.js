const { ERR, ERR_EMAIL_OR_PASSWORD, ERR_SERVER } = require('../utils/errors')
const userServices = require('../services/users.service')
const bcrypt = require('../utils/bcrypt')

module.exports = {
  loginUser: async (req, res, next) => {
    try {
      const user = userServices.getUserByKeyValue(req.body, "email")
      const isPassword = userServices.compareUserDataByKeyValue(req.body, 'password')
      if(!user || !isPassword) {
        return next(ERR_EMAIL_OR_PASSWORD)
      }
      delete user.password
      res.send(user)
    } catch (error) {
      return next(ERR)
    }
  },
  registerUser: async (req, res) => {
    try {
      const {body} = req
      const hash = await bcrypt.hashPassword(body.password)
      const newId = userServices.addUser(body, hash)
      res.send({id: newId})  
    } catch(err) {
      next(ERR_SERVER)
    }
  }
}
const { Router } = require("express")
const userController = require("../controllers/userController.js")

const routes = Router()

routes.get("/infos/get", userController.getAllUsers)
routes.get("/infos/get/:id", userController.getUser)
routes.post("/infos/post", userController.postUser)
routes.delete("/infos/delete/:id", userController.deleteUser)

module.exports = routes
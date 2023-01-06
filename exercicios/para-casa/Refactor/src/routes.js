const { Router } = require("express");
const clientController = require("./controllers/client");
const accountController = require("./controllers/account")
const routes = Router();

routes.post("/clients/create", clientController.create);
routes.get("/clients", clientController.read);
routes.patch("/clients/update/:id", clientController.update);
routes.delete("/clients/delete/:id", clientController.destroy);
routes.patch("/clients/AccountType/:id", accountController.updateAccountType);
routes.patch("/clients/transaction/:id", accountController.updateBankBalance);

module.exports = routes
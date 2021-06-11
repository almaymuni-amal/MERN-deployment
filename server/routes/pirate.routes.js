const PiratesController = require("../controllers/pirate.controller");
// routes is similar to urls.py
module.exports = (app) => {
  // different routes for the endpoints to match Controller
  // Create
  app.post("/api/pirates", PiratesController.createPirate);
  // Get All
  app.get("/api/pirates", PiratesController.getAll)
  //get one
  app.get("/api/pirates/:id", PiratesController.getOne)
  // Update
  app.put("/api/pirates/:id", PiratesController.updatePirate)
  // Delete
  app.delete("/api/pirates/:id", PiratesController.deletePirate)
};
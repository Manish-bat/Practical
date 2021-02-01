module.exports = app => {
    const practicals = require("../controllers/controllers.js");
  
    var router = require("express").Router();
  
    // Create a new Practical
    router.post("/", practicals.create);
  
    // Retrieve all Practicals
    router.get("/", practicals.findAll);
  
    // Retrieve all published Practicals
    router.get("/published", practicals.findAllPublished);
  
    // Retrieve a single Practical with id
    router.get("/:id", practicals.findOne);
  
    // Update a Practical with id
    router.put("/:id", practicals.update);
  
    // Delete a Practical with id
    router.delete("/:id", practicals.delete);
  
    // Create a new Practical
    router.delete("/", practicals.deleteAll);
  
    app.use("/api/practicals", router);
  };
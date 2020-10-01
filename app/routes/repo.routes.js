module.exports = app => {
  const repos = require("../controllers/repo.controller.js");

  var router = require("express").Router();


  // Retrieve all Tutorials
  router.get("/:type_id&:aff_id", repos.findURL);
  router.get("/", repos.findAll);
  app.use('/aff_c', router);
};

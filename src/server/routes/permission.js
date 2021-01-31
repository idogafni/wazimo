const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const permissionController = require("../controllers/permission");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", permissionController.test);
router.get("/getData", permissionController.getData);
router.post("/create", permissionController.setWebsites);
router.put("/update", permissionController.setWebsites);
router.delete("/delete", permissionController.deleteWebsite);

module.exports = router;

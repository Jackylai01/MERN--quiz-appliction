const router = require("express").Router();
const routesCtrl = require("../controllers/resultCtrl");

router.get("/", routesCtrl.getResult);
router.post("/", routesCtrl.storeResult);
router.delete("/", routesCtrl.dropResult);

module.exports = router;

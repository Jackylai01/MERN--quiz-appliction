const router = require("express").Router();
const questionsCtrl = require("../controllers/questionsCtrl");

router.get("/", questionsCtrl.getQuestions);

router.post("/", questionsCtrl.inserQuestions);

router.delete("/", questionsCtrl.dropQuestions);

module.exports = router;

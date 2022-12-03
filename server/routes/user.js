const router = require("express").Router();
const { create, get } = require("../controller/user");

router.post("/create", create);
router.get("/", get);

module.exports = router;

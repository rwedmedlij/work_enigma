const router = require("express").Router();
const userController = require("../Controller/user");
const jwt = require("jwt-simple");
const secret = "1234";
    

router.route("/get_Users").get(userController.get_Users);

router.route("/add_User").post(userController.add_User);
router.route("/edit_User").put(userController.edit_User);
router.route("/delete_User").delete(userController.delete_User);

module.exports = router;

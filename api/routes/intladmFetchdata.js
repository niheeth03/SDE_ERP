const User = require("../models/intladm/intl_admCourses");
const router = require("express").Router();

router.get("/", async (req, res) => {
    let x = await (User.find());
    res.send(x);
});

module.exports=router;
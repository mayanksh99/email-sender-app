const express = require("express");
const router = express.Router();

// load controller
const { sendEmail, sendSMS } = require("../../../controllers/index_controller");

// middlewares
let { catchErrors } = require("../../../config/errorHandler");
let { allAuth } = require("../../../middlewares/auth");

// routes
router.get("/sendEmail", catchErrors(sendEmail));
router.get("/sendSMS", catchErrors(sendSMS));

// export router
module.exports = router;

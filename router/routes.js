const { Router } = require("express");
const pdfController = require("../controllers/pdfController");
const router = Router();

router.get("/", (req, res) => { res.sendFile() });
router.get("/create", pdfController.create);

module.exports = router;
const express = require("express");
const router = express.Router();

const Entrega = require('./controllers/entrega')

router.get('/entrega', Entrega.read)

module.exports = router
const express = require("express");
const router = express.Router();

const Entrega = require('./controllers/entrega')
const Etiqueta = require('./controllers/etiqueta')

router.get('/entrega', Entrega.read)

router.get('/etiqueta', Etiqueta.read)
router.get('/etiqueta/:numeroDoPedido', Etiqueta.readById)
router.post('/etiqueta', Etiqueta.addEtiqueta)



router.get('/', (req, res) => { return res.json("API respondendo") });

module.exports = router
const {Router} = require('express')
const {crearmaterial,getMaterialTitulo,getMateriales} = require('../../controllers/material-bibliografico/material')
const router = Router()


router.post('/materiales',crearmaterial);
router.get('/materiales/:titulo',getMaterialTitulo);
router.get('/materiales',getMateriales);


module.exports = router;


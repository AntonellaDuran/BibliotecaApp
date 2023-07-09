const {Router} = require('express')
const {crearLibro,getLibroTitulo,getLibros} = require('../../controllers/libro/libro')
const router = Router()


router.post('/libros',crearLibro);
router.get('/libros/:titulo',getLibroTitulo);
router.get('/libros',getLibros);


module.exports = router;


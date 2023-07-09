const {Router} = require('express')
const {hacerPrestamo,getPrestamoCedula} = require('../../controllers/prestamo/prestamo')
const router = Router()


router.post('/prestamos',hacerPrestamo);
router.get('/prestamos/:cedula',getPrestamoCedula);



module.exports = router;



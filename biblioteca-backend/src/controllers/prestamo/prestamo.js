const {pool} = require('../../conexion')



const hacerPrestamo = async(req,res)=>{
const {cedula,nombres,cantidad,libro,
    correo,observacion,
    codigolibro,
    fechaprestamo,
    fechadevolucion
} = req.body;
const cantidadEntero = parseInt(cantidad);
const hacer = await pool.query('insert into prestamo(cedula,nombres,cantidad,libro,correo,observacion,codigolibro,fechaprestamo,fechadevolucion)values($1,$2,$3,$4,$5,$6,$7,$8,$9)',
[
    cedula,
    nombres,
    cantidadEntero,
    libro,
    correo,
    observacion,
    codigolibro,
    fechaprestamo,
    fechadevolucion
])
res.json({
    message: 'libro prestado',
    body:{
        prestamo: {nombres,cedula,fechaprestamo}
    }
})
}


const getPrestamoCedula = async(req,res)=>{
const cedula = req.params.cedula;
const response = await pool.query('select codigolibro, nombres,cedula,libro, fechaprestamo from prestamo where cedula = $1 ',
[
    cedula
])
res.status(200).json(response.rows);
}


module.exports = {
    hacerPrestamo,
    getPrestamoCedula
}
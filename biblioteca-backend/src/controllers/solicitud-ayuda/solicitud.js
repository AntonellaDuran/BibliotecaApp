const {pool} = require('../../conexion')



const crearSolicitud = async(req,res)=>{
const {nombres,correoinstitucional,asunto,mensaje} = req.body;
const insertar = await pool.query('insert into solicitud(nombres,correoinstitucional,asunto,mensaje)values($1,$2,$3,$4)',
[
    nombres,
    correoinstitucional,
    asunto,
    mensaje
])
res.json({
    message: 'solicitud enviada',
    body:{
        solicitud: {nombres,asunto,mensaje}
    }
})
}


const getSolicitudes = async(req,res)=>{
const response = await pool.query('select * from solicitud')
res.status(200).json(response.rows);
}


module.exports = {
    crearSolicitud,
    getSolicitudes
}
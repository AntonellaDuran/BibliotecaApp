const {pool} = require('../../conexion')



const crearLibro = async(req,res)=>{
const {codigolibro,titulo,estado,fechaedicion,categoria,url} = req.body;
const insertar = await pool.query('insert into libro(codigolibro,titulo,estado,fechaedicion,categoria,url)values($1,$2,$3,$4,$5,$6)',
[
    codigolibro,
    titulo,
    estado,
    fechaedicion,
    categoria,
    url
])
res.json({
    message: 'libro creado',
    body:{
        libro:{categoria,titulo,url}
    }
})
}

const getLibroTitulo = async(req,res)=>{
const titulo = req.params.titulo;
const response = await pool.query('select codigolibro,titulo,estado,fechaedicion,categoria,url from libro where titulo = $1',
[
    titulo
])
res.status(200).json(response.rows);
}

const getLibros = async(req,res)=>{
    const response = await pool.query('select codigolibro,titulo,estado,fechaedicion,categoria,url from libro')
    res.status(200).json(response.rows);
    }


module.exports = {
    crearLibro,
    getLibroTitulo,
    getLibros
}
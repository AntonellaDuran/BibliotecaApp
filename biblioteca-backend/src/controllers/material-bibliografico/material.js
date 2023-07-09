const {pool} = require('../../conexion')


const crearmaterial = async(req,res)=>{
const {titulo,clasematerial,autor,ano,editorial,url} = req.body;
const insertar = await pool.query('insert into material(titulo,clasematerial,autor,ano,editorial,url)values($1,$2,$3,$4,$5,$6)',
[
    titulo,
    clasematerial,
    autor,
    ano,
    editorial,
    url
])
res.json({
    message: 'material creado',
    body:{
        material:{titulo,clasematerial,url}
    }
})
}

const getMaterialTitulo = async(req,res)=>{
const titulo = req.params.titulo;
const response = await pool.query('select titulo,autor,ano,editorial,url from material where titulo = $1',
[
    titulo
])
res.status(200).json(response.rows);
}




const getMateriales= async(req,res)=>{
    const response = await pool.query('select titulo,autor,ano,editorial,url,clasematerial from material ')
    res.status(200).json(response.rows);
    }
    


module.exports = {
    crearmaterial,
    getMaterialTitulo,
    getMateriales
}
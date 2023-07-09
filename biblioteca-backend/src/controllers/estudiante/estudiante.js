const {pool} = require('../../conexion')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const crearUsuario = async(req,res)=>{
    const {identificacion,
        nombres,
        telefono,
        carrera,
        correoinstitucional,
        pass
    } = req.body;
    const passprotect = await bcrypt.hash(pass,10);
const insertar = await pool.query('insert into estudiante(identificacion,nombres,telefono,carrera,correoinstitucional,pass)values($1,$2,$3,$4,$5,$6)',
[
    identificacion,
    nombres,
    telefono,
    carrera,
    correoinstitucional,
    passprotect
])
res.json({
    message: 'estudiante registrado',
    body:{
        estudiante: {nombres,correoinstitucional,passprotect}
    }
})
}


const crearLogin = async(req,res)=>{
    const { correoinstitucional, pass } = req.body;
    const response = await pool.query('SELECT * FROM estudiante WHERE correoinstitucional = $1', 
    [
        correoinstitucional
    ]);
    
    if (response.rows.length === 0) {
      return res.json({ error: 'Usuario no encontrado' });
    }
  
    const passwordMatch = bcrypt.compareSync(pass, response.rows[0].pass);
    if (!passwordMatch) {
      return res.json({ error: 'Contraseña incorrecta' });
    }
  
    res.json({ success: 'Inicio de sesión exitoso',
               token: token(response)
});
}


function token(response){
    const payload = {
          correo: response.correoinstitucional,
          nombres: response.nombres
    }
    return jwt.sign(payload,'biblioteca');
}


module.exports = {
    crearUsuario,
    crearLogin
}

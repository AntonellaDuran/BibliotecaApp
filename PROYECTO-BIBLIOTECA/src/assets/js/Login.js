function validate()
{
    var Username=document.getElementById("Username").value;
    var Password=document.getElementById("Password").value;

//Validamos los datos de sus campos//
    if (Username=="Admin"&& Password=="282882")
    {
        alert ("Inicio sesion exitoso!!");
        return false;
    }
    else
    {
        alert("Sus datos son incorrectos!!");
    }


}
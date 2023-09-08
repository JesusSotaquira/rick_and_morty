const validation = (userData) =>{
    const errors = {};

    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i.test(userData.email)){
        errors.email = 'el email ingresado no es valido :('
    }
    if(userData.email.length === ''){
        errors.email = 'debe ingresar un email'
    }
    if(userData.email.length > 35){
        errors.email = 'ʕ•́ᴥ•̀ʔっ maximo 35 caracteres '
    }


    if(!/^(?=.*\d)[A-Za-z\d]{6,10}$/.test(userData.password)){
        errors.password = '(ง︡'-'︠)ง debe tener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password  = ' (っ-̶●̃益●̶̃)っ debe de tener entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation
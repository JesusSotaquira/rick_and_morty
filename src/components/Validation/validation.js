const validation = (userData) =>{
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'el email ingresado no es valido :('
    }
    if(userData.email.length === ''){
        errors.email = 'debe ingresar un email'
    }
    if(userData.email.length > 35){
        errors.email = 'ʕ•́ᴥ•̀ʔっ maximo 35 caracteres '
    }
    
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(userData.password)){
        errors.password = '(ง︡'-'︠)ง debe tener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password  = ' (ง︡'-'︠)ง debe de tener entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation
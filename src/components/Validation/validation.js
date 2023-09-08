const validation = (userData) => {
    const errors = {};

    if (!userData.email) {
        errors.email = 'Debe ingresar un email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = 'El email ingresado no es válido :(';
    } else if (userData.email.length > 35) {
        errors.email = 'ʕ•́ᴥ•̀ʔっ máximo 35 caracteres';
    }

    if (!/^(?=.*\d)[A-Za-z\d]{6,10}$/.test(userData.password)) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y al menos un número.';
    }

    return errors;
}

export default validation;

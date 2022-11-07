
export function valida(input){    
    const tipoDeInput = input.dataset.tipo;        

    if (tipoDeInput != 'mensaje') {
        if(input.validity.valid){
            input.parentElement.classList.remove('input-container--invalid');
            input.parentElement.classList.add('input-container--valid');
            input.parentElement.querySelector('.input-message-error').innerHTML = '';
        }else{
            input.parentElement.classList.add('input-container--invalid');
            input.parentElement.classList.remove('input-container--valid');
            input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeError(tipoDeInput, input);
        }
    } else {
        if(input.validity.valid){
            input.parentElement.classList.remove('textarea-container--invalid');
            input.parentElement.classList.add('textarea-container--valid');
            input.parentElement.querySelector('.textarea-message-error').innerHTML = '';
        }else{
            input.parentElement.classList.add('textarea-container--invalid');    
            input.parentElement.classList.remove('textarea-container--valid');        
            input.parentElement.querySelector('.textarea-message-error').innerHTML = mostrarMensajeError(tipoDeInput, input);
        }
    }
    
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",    
    "customError",
    "patternMismatch"
]

const mensajesError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El email no es valido, debe cumplir el siguiente formato: ejemplo@dominio.com",
        patternMismatch: "El email no es valido, debe cumplir el siguiente formato: ejemplo@dominio.com"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío"
    }
}

function mostrarMensajeError(tipoInput, input){
    let mensaje = '';
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesError[tipoInput][error];
        }
    } )
    return mensaje;
}
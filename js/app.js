//constantes
const resultados = document.querySelector('#resultados');
//input municipio
const municipio = document.querySelector('#municipio');
//input tipo de comida
const tipoComida = document.querySelector('#tipoComida');
//input disponibilidad
const disponibilidad = document.querySelector('#disponibilidad');
//input calificacion
const calificacion = document.querySelector('#calificacion');
//input minimo
const minimo = document.querySelector('#minimo');
//input maximo
const maximo = document.querySelector('#maximo');
//input metodoPago
const metodoPago = document.querySelector('#metodoPago');
//input estacionamiento
const estacionamiento = document.querySelector('#estacionamiento');

//creamos un objeto con los atributos vacios
const objBusqueda = {
    municipio: '',
    tipoComida: '',
    disponibilidad: '',
    calificacion: '',
    minimo: '',
    maximo: '',
    metodoPago: '',
    estacionamiento: ''
}


//listeners
eventListeners();
function eventListeners() {
    //mostrar negocios
    document.addEventListener('DOMContentLoaded', () => {
        mostrarNegocios( negocios );
    });
    //agregamos un listener al input municipio
    municipio.addEventListener('change', e => {
        //obtenemos el valor del input
        //console.log(e.target.value);
        //insertamos el valor al objeto de busqueda
        objBusqueda.municipio = e.target.value;
        //llamamos la funcion para hacer la busqueda
        filtrarBusqueda();
    });
    //agregamos un listener al input tipo de comida
    tipoComida.addEventListener('change', e => {
        //obtenemos el valor del input
        //console.log(e.target.value);
        //insertamos el valor al objeto de busqueda
        objBusqueda.tipoComida = e.target.value;
        //llamamos la funcion para hacer la busqueda
        filtrarBusqueda();
    });
    //agregamos un listener al input disponibilidad
    disponibilidad.addEventListener('change', e => {
        //obtenemos el valor del input
        //console.log(e.target.value);
        //insertamos el valor al objeto de busqueda
        objBusqueda.disponibilidad = e.target.value;
        //llamamos la funcion para hacer la busqueda
        filtrarBusqueda();
    });
    //agregamos un listener al input calificacion
    calificacion.addEventListener('change', e => {
        //obtenemos el valor del input
        //console.log(e.target.value);
        //insertamos el valor al objeto de busqueda
        objBusqueda.calificacion = parseFloat(e.target.value);
        //llamamos la funcion para hacer la busqueda
        filtrarBusqueda();
    });
    //agregamos un listener al input minimo
    minimo.addEventListener('change', e => {
        //obtenemos el valor del input
        //console.log(e.target.value);
        //insertamos el valor al objeto de busqueda
        objBusqueda.minimo = e.target.value;
        //llamamos la funcion para hacer la busqueda
        filtrarBusqueda();
    });
    //agregamos un listener al input maximo
    maximo.addEventListener('change', e => {
        //obtenemos el valor del input
        //console.log(e.target.value);
        //insertamos el valor al objeto de busqueda
        objBusqueda.maximo = e.target.value;
        //llamamos la funcion para hacer la busqueda
        filtrarBusqueda();
    });
    //agregamos un listener al input metodoPago
    metodoPago.addEventListener('change', e => {
        //obtenemos el valor del input
        //console.log(e.target.value);
        //insertamos el valor al objeto de busqueda
        objBusqueda.metodoPago = e.target.value;
        //llamamos la funcion para hacer la busqueda
        filtrarBusqueda();
    });
    //agregamos un listener al input estacionamiento
    estacionamiento.addEventListener('change', e => {
        //obtenemos el valor del input
        //console.log(e.target.value);
        //insertamos el valor al objeto de busqueda
        objBusqueda.estacionamiento = e.target.value;
        //llamamos la funcion para hacer la busqueda
        filtrarBusqueda();
    });
}
//funciones
//mostrar negocios
function mostrarNegocios( negocios ) {
    //limpiar el html anterior
    limpiarHTML();
    negocios.forEach( negocio => {
        //destructuring
        const { calificacion, disponibilidad, estacionamiento, metodoPago, municipio, nombre, rangoPrecioMaximo, rangoPrecioMinimo, tipoComida } = negocio;
        //construir el HTML
        const pNegocio = document.createElement('p');
        //styles
        pNegocio.classList.add('border-2', 'border-indigo-200', 'p-3');
        //textcontent
        pNegocio.textContent = `Nombre de negocio: ${nombre} - ${municipio} - ${ disponibilidad } - Calificacion: ${calificacion}/5 - Estacionamiento: ${estacionamiento} - Metodo de pago: ${metodoPago} - Tipo de comida: ${tipoComida} - Rangos de precios: $${rangoPrecioMinimo} - $${rangoPrecioMaximo} `;

        //renderizar
        resultados.appendChild( pNegocio );

    });
}
//funcion para hacer el filtro de busqueda
function filtrarBusqueda() {
    const resultado = negocios.filter( filtrarMunicipio ).filter( filtrarTipoComida).filter( filtrarDisponibilidad ).filter( filtrarCalificacion );
    //renderizar
    if (resultado.length > 0 ) {
        mostrarNegocios( resultado );
    }else{
        //mostrar alerta de no negocios encontrados
        mostrarAlerta('NO HAY RESULTADO CON ESTOS PARAMETROS, INTENTAR CON OTROS PARAMETROS');
    }
}
//funcion para mostrar la alerta de error
function mostrarAlerta( mensajeError ) {
    //limpiar el HTML anterior
    limpiarHTML();
    //construir el HTML
    //div contenedor
    const divContenedor = document.createElement('div');
    //estilos
    divContenedor.classList.add('text-center');
    //insertar un atributo tipo role
    divContenedor.setAttribute('role', 'alert');
    //div de titulo
    const divTitulo = document.createElement('div');
    //estilos
    divTitulo.classList.add('bg-red-500', 'text-white', 'font-bold', 'rounded-t', 'px-4', 'py-2');
    //textcontent
    divTitulo.textContent = '¡CUIDADO!'
    //div mensaje
    const divMensaje = document.createElement('div');
    //estilos
    divMensaje.classList.add('border', 'border-t-0', 'border-red-400', 'rounded-b', 'bg-red-100', 'px-4', 'py-3', 'text-red-700');
    divMensaje.textContent = mensajeError;

    //insertar divtitulo a divcontenedor
    divContenedor.appendChild( divTitulo );
    //insertar divmensaje a divcontenedor
    divContenedor.appendChild( divMensaje );
    //RENDERIZAR
    resultados.appendChild( divContenedor );

}
//limpiar el html anterior
function limpiarHTML() {
    while( resultados.firstChild ) {
        resultados.removeChild(resultados.firstChild);
    }
}
//funcion para filtrar por municipio
function filtrarMunicipio( negocio ) {
    //destructuring
    const { municipio } = objBusqueda;
    //verificar si viene algo en municipio
    if (municipio) {
        return negocio.municipio === municipio;
    }
    return negocio;
}
//funcion para filtrar por TipoComida
function filtrarTipoComida( negocio ) {
    //destructuring
    const { tipoComida } = objBusqueda;
    //verificar si viene algo en tipoComida
    if (tipoComida) {
        return negocio.tipoComida === tipoComida;
    }
    return negocio;
}
//funcion para filtrar por Disponibilidad (Abiert/Cerrado)
function filtrarDisponibilidad( negocio ) {
    //destructuring
    const { disponibilidad } = objBusqueda;
    //comprobar si viene disponibilidad
    if ( disponibilidad ) {
        return negocio.disponibilidad === disponibilidad;
    }
    return negocio;
}
//funcion para filtrar por Calificacion 
function filtrarCalificacion( negocio ) {
    //destructuring
    const { calificacion } = objBusqueda;
    //comprobar si viene calificacion
    if ( calificacion ) {
        if ( calificacion === 1 ) {
            return negocio.calificacion >= 1 && negocio.calificacion < 2;
        } else if ( calificacion === 2 ) {
            return negocio.calificacion >= 2 && negocio.calificacion < 3;
        }else if ( calificacion === 3 ) {
            return negocio.calificacion >= 3 && negocio.calificacion < 4;
        }else if ( calificacion === 4 ) {
            return negocio.calificacion >= 4 && negocio.calificacion < 5;
        }else if ( calificacion === 5 ) {
            return negocio.calificacion >= 5;
        }
    }
    return negocio;
}
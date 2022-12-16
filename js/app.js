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
    const resultado = negocios.filter( filtrarMunicipio ).filter( filtrarTipoComida);
    //renderizar
    if (resultado.length > 0 ) {
        mostrarNegocios( resultado );
    }else{
        //mostrar alerta de no negocios encontrados
        console.log("no hay negocios con esos parametros");
    }
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
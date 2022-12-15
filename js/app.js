//constantes
const resultados = document.querySelector('#resultados');
//listeners
eventListeners();
function eventListeners() {
    //mostrar negocios
    document.addEventListener('DOMContentLoaded', mostrarNegocios)
}

//funciones
//mostrar negocios
function mostrarNegocios() {
    negocios.forEach( negocio => {
        console.log( negocio );
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
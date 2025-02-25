window.onload = function () {
    mostrar();
}

let obj = {
    url: 'Medicamentos/listarMedicamentos',
    cabeceras: ['Id', 'Nombre', 'Descripcion'],
    propiedades: ['id', 'nombre', 'descripcion'],
    editar: true,
    eliminar: true
};

function filtrarDinamico() {
    let descMedicamento = getValue('descMedicamentoInput');

    if (descMedicamento == "")
        mostrar();
    else
        filtrar();
}

async function mostrar() {
    obj.url = 'Medicamentos/listarMedicamentos';
    mostrarTabla(obj);
}

async function filtrar() {
    let descMedicamento = getValue('descMedicamentoInput');
    obj.url = 'Medicamentos/filtrarMedicamentos?descripcionFiltrar=' + descMedicamento;
    mostrarTabla(obj);
}

async function limpiar() {
    setValue('descMedicamentoInput', '');
    filtrar();
    mostrarTabla(objSucursal);
}

function GuardarTipoMedicamento() {
    let formData = new FormData(document.getElementById('formBuscar'));
    fetchPost('Medicamentos/GuardarTipoMedicamento', 'text', formData, (res) => {
        let tabla = document.createElement('table');
        document.getElementById('divtabla').innerHTML = '';
        document.getElementById('divtabla').appendChild(tabla);
        tabla.classList.add('table', 'table-striped', 'table-bordered');
        tabla.innerHTML = generarTabla(obj, res);

        mostrar();
        
    });
}

function LimpiarTipoMedicamento() {
    LimpiarDatos("frmBuscar");
}
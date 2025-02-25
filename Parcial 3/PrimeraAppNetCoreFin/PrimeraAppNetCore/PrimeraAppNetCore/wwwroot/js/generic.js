async function fetchGet(url, resTipo, callback) {
    try {
        let raiz = getValue('hiddenInput');
        let urlCompleta = window.location.protocol + '//' + window.location.host + '/' + raiz + url;

        let res = await fetch(urlCompleta);
        if (resTipo === 'json') res = await res.json();
        if (resTipo === 'text') res = await res.text();

        callback(res);
    } catch (e) {
        alert(e);
    }
}

async function fetchPost(url, resTipo, form, callback) {
    try {
        let raiz = getValue('hiddenInput');
        let urlCompleta = window.location.protocol + '//' + window.location.host + '/' + raiz + url;

        let res = await fetch(urlCompleta, {
            method: 'POST',
            body: form
        });
        if (resTipo === 'json') res = await res.json();
        if (resTipo === 'text') res = await res.text();

        callback(res);
    } catch (e) {
        alert(e);
    }
}

function getValue(id) {
    return document.getElementById(id).value;
}

function setValue(id, value) {
    document.getElementById(id).value = value;
}

function setName(name) {
    return document.getElementsByName(name)[0].value;
}

function mostrarTabla(config) {
    fetchGet(config.url, 'json', (res) => {
        let tabla = document.createElement('table');
        document.getElementById('divtabla').innerHTML = '';
        document.getElementById('divtabla').appendChild(tabla);
        tabla.classList.add('table', 'table-striped', 'table-bordered');
        tabla.innerHTML = generarTabla(config, res);
    });

}

function generarTabla(config, res) {
    let contenido = '<thead><tr>';

    for (let cabecera of config.cabeceras) contenido += `<th>${cabecera}</th>`;

    if (config.editar || config.eliminar) {
        contenido += '<th>Operaciones</th>';
    }
    contenido += '</tr></thead>';

    contenido += '<tbody>';
    for (let obj of res) {
        contenido += '<tr>';

        for (let propiedad of config.propiedades) {
            contenido += `<td>${obj[propiedad]}</td>`;
        }

        if (config.editar || config.eliminar) {
            contenido += '<td>';
            if (config.editar) {
                contenido += `
                    <button class="btn btn-primary" onclick="Editar(${obj[o]})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg>
                    </button>
                `;
            }

            if (config.eliminar) {
                contenido += `
                    <button class="btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                    </button>
                `;
            }
            contenido += '</td>';


        
        }

        contenido += '</tr>';
    }
    contenido += '</tbody>';

    return contenido;
}

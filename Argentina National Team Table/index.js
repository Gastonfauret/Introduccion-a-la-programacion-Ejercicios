import players from './squad.json' assert {type: 'json'};

const tabla = document.getElementById('tableContainer');

players.forEach(player => {
    const fila = document.createElement('tr');

    const celda_nro = document.createElement('td');
    celda_nro.textContent = `${player.number}`;
    fila.appendChild(celda_nro);

    const celda_nombre = document.createElement('td');
    celda_nombre.textContent = `${player.name.last} ${player.name.first}`;
    fila.appendChild(celda_nombre);

    const celda_edad = document.createElement('td');
    celda_edad.textContent = `${player.age}`;
    fila.appendChild(celda_edad);

    const celda_posicion = document.createElement('td');
    celda_posicion.textContent = `${player.position}`;
    fila.appendChild(celda_posicion);

    const celda_club = document.createElement('td');
    celda_club.textContent = `${player.team}`;
    fila.appendChild(celda_club);

    const celda_lugar_nacimiento = document.createElement('td');
    celda_lugar_nacimiento.textContent = `${player['place of Birth'].city}`
    fila.appendChild(celda_lugar_nacimiento);

    const celda_provincia = document.createElement('td');
    celda_provincia.textContent = `${player['place of Birth'].province}`;
    fila.appendChild(celda_provincia);

    let celda_partidos_disputados = document.createElement('td');
    celda_partidos_disputados.textContent = `${player['matches played']}`
    fila.appendChild(celda_partidos_disputados);

    const celda_goles_marcados_recibidos = document.createElement('td');
    celda_goles_marcados_recibidos.textContent = `${player.goals}` ;
    fila.appendChild(celda_goles_marcados_recibidos);
    
    tabla.appendChild(fila);
});


var notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

var txt_aprobados = document.getElementById('total_aprobados');
var txt_supletorio = document.getElementById('total_supletorio');
var txt_reprobados = document.getElementById('total_reprobados');

var txt_promedio = document.getElementById('promedio_curso');

var txt_estado = document.getElementById('estado_curso');
var alert_estado = document.getElementById('alert_estado');

var tbody = document.getElementById('tbody_notas');

var cont_aprobados = 0;
var cont_supletorio = 0;
var cont_reprobados = 0;
var suma = 0;

tbody.innerHTML = '';

notas.forEach(function (nota, index) {
  suma = suma + nota;

  var clasificacion = '';
  var badgeClass = '';

  if (nota >= 7 && nota <= 10) {
    cont_aprobados = cont_aprobados + 1;
    clasificacion = 'APROBADO';
    badgeClass = 'bg-success';

  } else if (nota >= 5 && nota <= 6) {
    cont_supletorio = cont_supletorio + 1;
    clasificacion = 'SUPLETORIO';
    badgeClass = 'bg-warning text-dark';

  } else {
    cont_reprobados = cont_reprobados + 1;
    clasificacion = 'REPROBADO';
    badgeClass = 'bg-danger';

  }


  var tr = document.createElement('tr');

  var td1 = document.createElement('td');
  td1.textContent = (index + 1);

  var td2 = document.createElement('td');
  td2.textContent = nota;

  var td3 = document.createElement('td');
  var span = document.createElement('span');
  span.className = 'badge ' + badgeClass;
  span.textContent = clasificacion;
  td3.append(span);

  tr.append(td1);
  tr.append(td2);
  tr.append(td3);

  tbody.append(tr);
});


var promedio = suma / notas.length;

txt_aprobados.textContent = cont_aprobados;
txt_supletorio.textContent = cont_supletorio;
txt_reprobados.textContent = cont_reprobados;
txt_promedio.textContent = promedio.toFixed(2);

if (promedio >= 7) {
  txt_estado.textContent = 'APROBADO';
  alert_estado.className = 'alert alert-success glass mb-4';
} else {
  txt_estado.textContent = 'EN RIESGO';
  alert_estado.className = 'alert alert-danger glass mb-4';
}

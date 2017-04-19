window.addEventListener('load',function(){
  var dfm = document.createDocumentFragment();

  var divRojo = crearDiv('rojo center');
  var divMorado = crearDiv('morado');
  var divAmarillo = crearDiv('amarillo');

  divRojo.appendChild(divMorado);
  divMorado.appendChild(divAmarillo);

  var divAzul = crearDiv('azul center');
  var divVerde = crearDiv('verde');
  var divNegro = crearDiv('negro');

  divAzul.appendChild(divNegro);
  divAzul.appendChild(divVerde);

  dfm.appendChild(divRojo);
  dfm.appendChild(divAzul);

  document.getElementsByTagName('section')[0].appendChild(dfm);
});

function crearDiv(clase){
  var div = document.createElement('div');
  div.setAttribute('class',clase);
  return div;
}

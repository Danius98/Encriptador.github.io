const textoNormal = document.getElementById('normal')
const textoCodificado = document.getElementById('encriptado')
const encryptBtn = document.getElementById('encriptar');
const encryptCopyBtn = document.getElementById('copiar__normal');
const dencryptCopyBtn = document.getElementById('copiar__encriptado');
const dencryptBtn = document.getElementById('desencriptar');

//me busca globalmente las letras en el texto
const encriptar = /a|e|i|o|u/g;

//de igual forma pero cunado está encriptado
const desencriptar = /ai|enter|imes|ober|ufat/g;


const encriptado = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

const desencriptado = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

function multiReplace(strings, regex, replaces) {
    return strings.replace(regex, function(x) {
      // check with replaces key to prevent error, if false it will return original value
      return Object.keys(replaces).includes(x) ? replaces[x] : x;
    });
  }

function crypt(){
  var texto = textoNormal.value.toLowerCase();
  var codificar = multiReplace(texto, encriptar, encriptado);
  //alert(codificar)
  textoCodificado.value = codificar;
  //console.log(textoCodificado.innerHTML);
  alert(textoCodificado.value)
  textoNormal.value = "";
  //textoNormal.style.background = "show"
  //textoCodificado.style.background = "none";
  //alert("Texto codificado");
  //encryptCopyBtn.style.display = "show";
  //encryptCopyBtn.style.display = "inherit";
}

function dencrypt(){
  var codificado = textoCodificado.value.toLowerCase();
  var descodificar = multiReplace(codificado, desencriptar, desencriptado);
  //alert(descodificar)
  textoNormal.value = descodificar;
  alert(textoNormal.value)
  console.log(textoNormal);
  textoCodificado.value = "";
  //textoCodificado.style.background = "none";
  alert("Texto codificado")
}

function copiaNormal(){
  if(textoNormal.value == ""){
    alert('Ingresa texto antes de copiar')
  } else {
    textoNormal.select();
    document.execCommand('copy');
    alert('Texto copiado');
  }
}

function copiaEncriptado(){
  if(textoCodificado.value == ""){
    alert('No hay texto codificado que copiar')
  } else {
    textoCodificado.select();
    document.execCommand('copy');
    alert('Texto codificado copiado');
  }
}
// inserir os numeros na tela

function inserir(num) {
  // Substituir 'X' por '*'
  num = num === 'x' ? '*' : num;

  let numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

// limpar os numeros da tela 

function clean () {
  document.getElementById('resultado').innerHTML = '';
}

// apagar digito

function back() {
  let resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

// resultado 

function calcular () { 
  let resultado = document.getElementById('resultado').innerHTML;
  if(resultado) {
    try {
      let resultadoFinal = eval("(" + resultado + ")");
      document.getElementById('resultado').innerHTML = resultadoFinal;
    } catch (error) {
      document.getElementById('resultado').innerHTML = 'Erro';
    }
  }
}
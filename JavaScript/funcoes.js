//alert('Olá, seja bem vindo ao curso!!!')
/*
 selecionar um elemento no DOM
 atualizar o valor desse elemento com uma string*/
//document.getElementById('nome').value * 'OI'

//Exemplos usando Funções
//void
//retorno
/*
    var largura = prompt('Digite a largura do terreno em metros')
    var comprimento = prompt('Digite o comprimento do terreno em metros')

    var area = calcularAreaTerreno(largura, comprimento)

    document.write('O terreno possui ' + area  + 'metros quadrados')

    function calcularAreaTerreno (largura, comprimento ) {


      //lógica
      var area = largura * comprimento

      return area

    }*/

/*function soma(a, b) {
  b = b === underfined ? 0 : b;
  return a + b;
}

console.log(soma(7, 7));
console.log(soma(7, 7, 9, 15)); //desconsidera os parâmetros adicionais
console.log(soma(7));

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos*/

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}

corFavorita(); // retorna 'Você não gosta de nada'

//Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
/*addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//Valores retornados
//Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
//Escopo
//Variáveis e funções dentro de um bloco {} , não são visíveis fora dele.

/*function faltaVisitar(paisesVisitados) {
     var totalPaises = 193;
     return 'Falta visitar'${totalPaises-paisesVisitados} paises';
     }*/
/*
var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());

// Retorna 'André, 29, Rio de Janeiro, Designer'*/

// 1 - definir a variavel form do HTML;
// 2 - previnir o evento de submit para não recarregar a página;
// 3 - definir as variáveis peso e altura;
// 4 - coletar os valores do HTML;
// 5 - criar uma função para calcular o IMC;
// 6 - criar uma função para descobir o resultadoIMC(abaixo do peso, sobrepeso, etc);
// 7 - criar uma função para inserir parágrafos no HTML;
// 8 - criar uma função para inserir os resultados no HTML;

const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento Previnido')
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        return setResultado('Coloque um número válido', false)
    }

    if (!altura) {
        return setResultado('Coloque um número válido', false)
    }

    const imc = calcImc(peso, altura);
    const nivelImc = descobrirNivelImc(imc);
    const msg = `Seu IMC é: ${imc} - Resultado: ${nivelImc}.`
    setResultado(msg, true)

})

function calcImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function descobrirNivelImc (imc) {
    const tabelaImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc < 18.5) return tabelaImc[0];
    if (imc >= 18.5) return tabelaImc[1];
    if (imc >= 25) return tabelaImc[2];
    if (imc >= 30) return tabelaImc[3];
    if (imc >= 35) return tabelaImc[4];
    if (imc >= 40) return tabelaImc[5];
          
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add ('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}


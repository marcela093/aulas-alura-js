const title = document.querySelector('.title');
title.textContent = 'Aparecida Nutricionista';

// Capturando os dados do paciente, peso e altura para calcular IMC
const pacientes = document.querySelectorAll('.paciente');


for (i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];

    const peso = paciente.querySelector('.info-peso').textContent;

    const altura = paciente.querySelector('.info-altura').textContent;


    // Cálculo IMC
    const imc = peso / (altura * altura);

    const valorImc = paciente.querySelector('.info-imc');

    let pesoValido = true;
    let alturaValida = true;

    if (peso <= 0 || peso >= 400) {
        valorImc.textContent = 'peso inválido';
        pesoValido = false;
        paciente.classList.add('erro')
    }

    if (altura <= 0 || altura >= 3.00) {
        valorImc.textContent = 'altura inválida';
        alturaValida = false;
        paciente.classList.add('erro');
    }

    if (pesoValido && alturaValida) {
        // toFixed ajusta a quantidade de casas que queremos imprimir na tela
        valorImc.textContent = imc.toFixed(2);
    }
}
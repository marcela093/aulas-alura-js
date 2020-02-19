const title = document.querySelector('.title');
title.textContent = 'Aparecida Nutricionista';

// Capturando os dados do paciente, peso e altura para calcular IMC
const pacientes = document.querySelectorAll('.paciente');


for (i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];

    const peso = paciente.querySelector('.info-peso').textContent;

    const altura = paciente.querySelector('.info-altura').textContent;


    // Validação IMC
    const valorImc = paciente.querySelector('.info-imc');

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido){
        pesoValido = false;
        valorImc.textContent = 'peso inválido';
        paciente.classList.add('erro')
    }

    if (!alturaValida){
        
        alturaValida = false;
        valorImc.textContent = 'altura inválida';
        paciente.classList.add('erro');
    }

    if (pesoValido && alturaValida) {
       valorImc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 400){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura * altura);
     // toFixed ajusta a quantidade de casas que queremos imprimir na tela
    return imc = imc.toFixed(2);
}




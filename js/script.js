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

    const botao = document.getElementById('adicionar-paciente');

    botao.addEventListener('click', function (e) {
        e.preventDefault();


        let form = document.querySelector('.form');
        let nome = form.nome.value;
        let peso = form.peso.value;
        let altura = form.altura.value;
        let gordura = form.gordura.value;
        let imcTd = imc;

        let pacienteTr = document.createElement('tr');

        let nomeTd = document.createElement('td');
        let pesoTd = document.createElement('td');
        let alturaTd = document.createElement('td');
        let gorduraTd = document.createElement('td');
        let imcT2 = document.createElement('td');

        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;
        imcT2.textContent = imcTd;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcT2);

        let tabela = document.getElementById('tabela-pacientes');
        tabela.appendChild(pacienteTr);


    });
}
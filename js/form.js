const botao = document.getElementById('adicionar-paciente');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    let form = document.querySelector('.form');

    let paciente = dadosPaciente(form)
   
    let pacienteTr = criaTr(paciente)

    let tabela = document.getElementById('tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset();
});

function dadosPaciente(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function criaTr(paciente){
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(criaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(criaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(criaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(criaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(criaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function criaTd(dado, classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
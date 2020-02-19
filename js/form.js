const botao = document.getElementById('adicionar-paciente');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    let form = document.querySelector('.form');
    let paciente = dadosPaciente(form)
    let pacienteTr = criaTr(paciente)

    let erros = validaPaciente(paciente);
    console.log(erros)
    if(erros.length > 0){
        exibeMsgErros(erros);
        return;
    }

    let tabela = document.getElementById('tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset();
    let ocultaMsgErro = document.querySelector('.msgs-erro');
    ocultaMsgErro.innerHTML = '';
});


function exibeMsgErros(erros){
    let ul = document.querySelector('.msgs-erro');
    ul.innerHTML = '';
    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    })
}

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

function validaPaciente(paciente){
    let erros = [];

    if(paciente.nome.length === 0){
        erros.push('O nome do paciente não pode estar em branco');
    }

    if(paciente.peso.length === 0){
        erros.push('O campo "Peso" não pode estar em branco');
    }

    if(paciente.altura.length === 0){
        erros.push('O campo "Altura" não pode estar em branco');
    }

    if(paciente.gordura.length === 0){
        erros.push('O campo "% de Gordura" não pode estar em branco');
    }

    if(!validaPeso(paciente.peso)){
        erros.push('Peso inválido!')
    }

    if(!validaAltura(paciente.altura)){
        erros.push('Altura inválida!')
    }
    return erros;
}
const botao = document.getElementById('adicionar-paciente');

botao.addEventListener('click', function (e) {
    e.preventDefault();


    let form = document.querySelector('.form');
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;
    // let imcValor = imc;

    let pacienteTr = document.createElement('tr');

    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    // imcTd.textContent = imcValor;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    let tabela = document.getElementById('tabela-pacientes');
    tabela.appendChild(pacienteTr);
});
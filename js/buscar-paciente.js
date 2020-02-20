const botaoBuscar = document.querySelector('#buscar-paciente');

botaoBuscar.addEventListener('click', function(){
    console.log('buscando paciente')
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){
        const erroAjax = document.querySelector('#erro-ajax');
        if(xhr.status === 200){
            erroAjax.classList.add('invisivel');

            const resposta = xhr.responseText;
            const listaPacientes = JSON.parse(resposta);
            console.log(typeof listaPacientes)
            console.log(listaPacientes)

            listaPacientes.forEach(function(paciente){
                addPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove('invisivel')
        }
    });

    xhr.send();
});
const tabelaPacientes = document.querySelector('#tabela-pacientes');

tabelaPacientes.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fade-out')
    
    setTimeout(function(){
        event.target.parentNode.remove()
    },5000);
})
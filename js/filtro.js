const filtraPaciente = document.querySelector('#filtro-pacientes');

filtraPaciente.addEventListener('input', function(){
    console.log(this.value);
    let pacientes = document.querySelectorAll('.paciente');
    
    if(this.value.length > 0){
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            const tdNome = paciente.querySelector('.info-nome');
            const nome = tdNome.textContent;
            const expressao = new RegExp(this.value, 'i');
    
            if(!expressao.test(nome)){
                paciente.classList.add('invisivel');
            }else{
                paciente.classList.remove('invisivel');
            }
            
    
        }
    }else{
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
    
});
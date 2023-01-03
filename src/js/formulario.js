const botaoDeEnviar = document.querySelector('button')
const informacoes = document.querySelectorAll('.informacao')
const formulario = document.querySelector('.formulario')
botaoDeEnviar.addEventListener('click', function(){
    informacoes.forEach(item =>{
        if(item.value !== ''){
            formulario.classList.add('Preenchido')
            const naoPreenchido = document.querySelectorAll('.naoPreenchido')
            if(naoPreenchido){
                formulario.classList.remove('naoPreenchido')
            }
        }else{
            const preenchido = this.querySelector('.Preenchido')
            if(preenchido){
                formulario.classList.remove('Preenchido')
            }
                formulario.classList.add('naoPreenchido') 
        }
    })
})
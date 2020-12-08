function criarTarefas() {
    const task = document.getElementById('tarefa')
    const dia = document.getElementById('dias-semana')
    const horario = document.getElementById('horario')
    if (task.value) {
        document.getElementById(dia.value).innerHTML += `<p class="item-lista">${horario.value} - ${task.value}</p>`
    }
    else {
        alert("Insira uma tarefa antes!")
    }
    task.value = ""
}
const btnCriar = document.getElementById("btn-criar")
btnCriar.addEventListener('click', criarTarefas)


function limparLista() {
    if (confirm("Tem certeza que deseja excluir todas as atividades?")) {
        const diaPlanner = document.getElementsByClassName("dias-planner")
        for (let i=0; i < diaPlanner.length; i++) {
        diaPlanner[i].innerHTML = ''
    }
    }
}
const btnLimpar = document.getElementById("btn-limpar")
btnLimpar.addEventListener('click', limparLista)

function func(e) {
    let x = event.target    
    if (x.tagName === "P") {
        x.classList.toggle("riscado")
    }
}
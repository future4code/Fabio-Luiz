function criarTarefas() {
    const task = document.getElementById('tarefa')
    const dia = document.getElementById('dias-semana')
    const horario = document.getElementById('horario')
    if (task.value) {
        document.getElementById(dia.value).innerHTML += `<p class="item-lista">${horario.value} - ${task.value}</p>`

        const list = document.getElementById(dia.value);

        // ORGANIZAR AS TAREFAS POR HORÁRIO (NÃO ENTENDI O CÓDIGO COMPLETAMENTE. SE PUDEREM EXPLICAR NUM COMENTARIO NA PR, AGRADEÇO)
        let items = list.childNodes;
        let itemsArr = [];
        for (let i in items) {
            if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
                itemsArr.push(items[i]);
            }
        }

        itemsArr.sort(function(a, b) {
        return a.innerHTML == b.innerHTML
                ? 0
                : (a.innerHTML > b.innerHTML ? 1 : -1);
        });

        for (i = 0; i < itemsArr.length; ++i) {
        list.appendChild(itemsArr[i]);
        }
        // -----------------------------------------------------------------------

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

const check = document.getElementById('main-container')
check.addEventListener('click', func)
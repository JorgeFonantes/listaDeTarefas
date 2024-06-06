let adicionarBtn = document.getElementById('adicionar-btn');
let tarefaInput = document.getElementById('tarefa-input');
let listaTarefas = document.getElementById('lista-tarefas');

adicionarBtn.addEventListener('click', function() {
    if (tarefaInput.value !== '') {
        let novaTarefa = document.createElement('p');
        listaTarefas.appendChild(novaTarefa);
        novaTarefa.innerText = '_ ' + tarefaInput.value;
        tarefaInput.value = '';

        novaTarefa.addEventListener('click', function() {
            if (novaTarefa.style.textDecoration === 'line-through') {
                novaTarefa.style.textDecoration = '';
            } else {
                novaTarefa.style.textDecoration = 'line-through';
            }
        });

        novaTarefa.addEventListener('dblclick', function() {
            listaTarefas.removeChild(novaTarefa);
        });
    }
});

import { useState, useEffect, useRef, useMemo } from "react";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function UseEffect() {
  // Define o estado do input para uma String vazia
  const [input, setInput] = useState("");
  // Define o estado das tarefas para um Array / String
  const [tasks, setTasks] = useState<string[]>([])
  // Define o estado de edição para um Objeto
  const [editTask, setEditTask] = useState({
    enable: false,
    task: ''
  })
  // Define uma referencia para o input
  const inputRef = useRef<HTMLInputElement>(null)

  // Executa quando a página é carregada
  useEffect(() => {
    // Salva tarefas em Local Storage e define a chave como @storage
    const saveTasks = localStorage.getItem("@storage")

    // Se tiver itens em Local Storage, converte JSON para Objeto / Array
    if (saveTasks) {
      try {
        setTasks(JSON.parse(saveTasks));
      } catch (error) {
        console.error("Failed to parse tasks from localStorage", error);
      }
    }
  }, []);

  // Função de registro
  function handleRegister() {
    // Se o input estiver vazio, apresenta uma mensagem e não registra
    if (!input) {
      Toastify({
        text: "Preencha o campo!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#0B5ED7",
        },
      }).showToast();
      return;
    }

    // Se a edição estiver habilitada, executa a função para salvar
    if (editTask.enable) {
      handleSaveEdit();
      return;
    }

    // Adiciona as tarefas existentes e mais a do input
    setTasks(tasks => [...tasks, input])

    // Limpa o input após adicionar
    setInput('')

    // Converte as tarefas para JSON
    localStorage.setItem("@storage", JSON.stringify([...tasks, input]))
  }
  // Função para editar itens
  function handleEdit(item: string) {
    inputRef.current?.focus();
    setInput(item)
    setEditTask({
      enable: true,
      task: item
    })
  }

  // Função para salvar as edições
  function handleSaveEdit() {
    // Procura a tarefa pelo indice
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    // Todos as tarefas
    const allTasks = [...tasks]
    allTasks[findIndexTask] = input;
    // Define tarefas como todas tarefas
    setTasks(allTasks)
    // Desabilita edição
    setEditTask({
      enable: false,
      task: ''
    })
    // Limpa o input após atualizar
    setInput('')
    // Converte todas as tarefas para JSON
    localStorage.setItem("@storage", JSON.stringify(allTasks))
  }

  // Função para deletar itens
  function handleDelete(item: string) {
    const removeTask = tasks.filter(task => task !== item)
    setTasks(removeTask)
    localStorage.setItem("@storage", JSON.stringify(removeTask))
  }

  // Contador de tarefas
  const totalTarefas = useMemo(() => {
    return tasks.length;
  }, [tasks])

  return (
    <div>
      <div className='border rounded m-3 p-2 overflow-auto scroll' style={{ maxHeight: "265px" }}>

        <h3 className="mt-1">Use Effect</h3><hr />

        <div className="d-flex justify-content-center">

          <div className='col-8 d-flex flex-column 
           border rounded p-2 m-1'>

            <input type="text" placeholder='Digite o nome da tarefa...' value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef} />

            <button className='mt-1 mb-1 btn btn-sm btn-primary' onClick={handleRegister}>{editTask.enable ? "Atualizar" : "Adicionar"}</button><hr />

            <div>
              {tasks.map((item) => (
                <section key={item}>
                  <span>
                    {item}
                  </span>
                  <button className='m-1 btn btn-sm btn-outline-light' onClick={() => handleEdit(item)}>Editar</button>
                  <button className='m-1 btn btn-sm btn-outline-light' onClick={() => handleDelete(item)}>Excluir</button>
                </section>
              ))}
            </div>
          </div>

          <div className='col-4 border rounded p-2 m-1 h-50'>
            <h3>Use Memo</h3><hr />
            <strong className='text-primary'>Você tem: {totalTarefas} tarefas!</strong>
          </div>

        </div>
      </div>
    </div>
  )
}
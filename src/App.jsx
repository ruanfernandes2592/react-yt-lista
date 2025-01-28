import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTask"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Title from "./components/Title"

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [] // mostra localStorage ou lista vazia caso não tenha nada no localStorage
  )
  /*{
    id: 1,
    title: 'Estudar Programação',
    description: 'Estudar programação para se tornar um desenvolvedor full stack',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Estudar inglês',
    description: 'Estudar inglês para se tornar um desenvolvedor full stack',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Estudar matemática',
    description: 'Estudar matemática para se tornar um desenvolvedor full stack',
    isCompleted: false,
  },*/

useEffect(() => { //converte tasks para JSON.stringify no local storage do navegador
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])

useEffect(() => { // SEM USO
  async function fetchTasks() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
    method: 'GET'
  })
  const data = await response.json() // converte para json
  setTasks(data) // armazena os dados da API no state tasks
  }
  // remover o comentario '//fetchTasks()' para pegar as tarefas da API
  //fetchTasks()
}, [])

function onTaskClick(abacate, laranja) { // recebeu os parametros passados diretamente no botão criado em Tasks.jsx
  console.log(abacate, laranja) // abacate recebe task.id e laranja recebe task.title
  //console.log(tasks.length)
  const newTasks = tasks.map((task) => { // percorre todas as tasks transformando em task
    if (task.id === abacate) {
      return { ...task, isCompleted: !task.isCompleted } //...task vai retornar tudo que tem na task e negar o valor de isCompleted tranformando neste caso em true
    }
    return task // mesma coisa de ter um else{return task}
  })
  setTasks(newTasks) // mostra lista de tasks atualizada
}

function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter(task => task.id != taskId) // filtra todas as tasks com id diferente da task que foi clicada
  setTasks(newTasks) // mostra lista de tasks atualizada
}

function onAddTaskSubmit(title, description) {
const newTask = {
  id: uuidv4(),
  title: title,
  description: description,
  isCompleted: false
}
setTasks([...tasks, newTask]) // tasks recebe + newTask
//console.log(tasks)
} 

//console.log(tasks)

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de Tarefas
        </Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks 
          tasks={tasks} //passando props
          onTaskClick={onTaskClick} // passando props de uma function
          onDeleteTaskClick={onDeleteTaskClick} 
        />
      </div>
    </div>
  )
}

export default App

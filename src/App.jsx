import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTask"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Title from "./components/Title"

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [
      {
    id: 1,
    title: 'Pagar energia Flat 201/206',
    description: 'Vencimento dia 30',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Pagar condomínio Flat 201/206',
    description: 'Vencimento dia 25',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Pagar energia apartamento Campina Grande',
    description: 'Vencimento dia 02',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Pagar condomínio apartamento Campina Grande',
    description: 'Vencimento dia 05',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Pagar Claro',
    description: 'Vencimento dia 20',
    isCompleted: false,
  },
  {
    id: 6,
    title: 'Pagar Faculdade',
    description: 'Vencimento dia 27',
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Pagar Cartão Bradesco',
    description: 'Vencimento dia 05',
    isCompleted: false,
  },
  {
    id: 8,
    title: 'Pagar Internet',
    description: 'Vencimento dia 30',
    isCompleted: false,
  },
    ] // mostra este array como padão no localStorage ou lista vazia caso não tenha nada no localStorage
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
    <div className="bg-violet-500 flex justify-center p-6">
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

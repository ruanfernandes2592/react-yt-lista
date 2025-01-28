import { ChevronRightIcon, TrashIcon, } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {

    const navigate = useNavigate()
    
    function onSeeDetailsClick(task) {
        const query = new URLSearchParams()
        query.set('title', task.title)
        query.set('description', task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => onTaskClick(task.id, task.title)}
                        className={`bg-slate-400 p-2 rounded-md text-white text-left w-full ${task.isCompleted && 'line-through'/* se task.isCompleted for true aplique 'line-through' */}`}>
                        {task.title}
                        {/*task.isCompleted ? 'COMPLETE' : 'INCOMPLETE'*/}
                    </button>
                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon />
                    </Button>
                    <Button 
                        onClick={() => onDeleteTaskClick(task.id)}
                    >
                        <TrashIcon />
                    </Button>
                </li>
            ))}
        </ul>
    ) 
}

export default Tasks
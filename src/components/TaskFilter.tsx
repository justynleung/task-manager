import Task from '../assets/task'

interface Props {
    tasks: Task[]
    setTasks: Function
    filter: string
}

export default function TaskFilter({ tasks, setTasks, filter }: Props) {
    const filteredTasks = tasks.filter((item) => item.category === filter)
    const removeItem = (id: string) => {
        const updatedList = tasks.filter((item) => id !== item.id)
        setTasks(updatedList)
    }
    const tasksList = filteredTasks.map((item, i) => {
        return (
            <tr key={i} className="h-10">
                <th>{item.title}</th>
                <th>{item.dueDate}</th>
                <th>{item.category}</th>
                {/* add delete function later */}
                <th><button onClick={() => removeItem(item.id)}>Delete</button></th>
            </tr>
        )
    })
    return (
        <>{tasksList}</>
    )
}

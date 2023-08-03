import Task from '../assets/task'

interface Props {
    tasks: Task[]
    setTasks: Function
    filter: string
}

export default function TaskFilter({ tasks, setTasks, filter }: Props) {
    const filteredTasks = [...tasks].filter((item) => item.category === filter)
    const removeItem = (id: string) => {
        const updatedList = tasks.filter((item) => id !== item.id)
        setTasks(updatedList)
    }
    const tasksList = filteredTasks && filteredTasks.map((item, i) => {
        if (filteredTasks) {
            return (
                <tr key={i} className="h-10">
                    <th>{item.title}</th>
                    <th>{item.dueDate}</th>
                    <th>{item.category}</th>
                    {/* add delete function later */}
                    <th><button onClick={() => removeItem(item.id)}>Delete</button></th>
                </tr>
            )
        }
    })
    return (
        <>
            {tasks && tasks.length !== 0 && filter !== "Category" && filteredTasks && filteredTasks.length === 0 ? <tr><td><small className='absolute w-fit left-0 right-0 mx-auto font-bold text-base bottom-14 text-orange-500'>No task in this cetegory. Select "Category" to see all tasks.</small></td></tr> : null}
            {tasksList}
        </>
    )
}

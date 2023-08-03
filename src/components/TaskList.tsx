import Task from "../assets/task"

interface Props {
    tasks: Task[]
    setTasks: Function
}

export default function TaskList({ tasks, setTasks }: Props) {
    const removeItem = (id: string) => {
        const updatedList = tasks.filter((item) => id !== item.id)
        setTasks(updatedList)
    }

    const tasksList = tasks.map((item, i) => {
        return (
            <tr key={i} className="h-10">
                <th>{item.title}</th>
                <th>{item.dueDate}</th>
                <th>{item.category}</th>
                <th><button onClick={() => removeItem(item.id)}>Delete</button></th>
            </tr>
        )
    })
    return (
        <div className="flex justify-center">
            <table className="w-full mx-4 mt-4 border-collapse">
                <thead>
                    <tr className="h-10">
                        <th>Title</th>
                        <th>Due Date</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasksList}
                </tbody>
            </table>
        </div >
    )
}
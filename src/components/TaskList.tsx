import { useState } from "react"
import Task from "../assets/task"
import categories from "../categories"
import TaskFilter from "./TaskFilter"
interface Props {
    tasks: Task[]
    setTasks: Function
}

export default function TaskList({ tasks, setTasks }: Props) {
    const [applyFilter, setApplyFilter] = useState(false)
    const [filter, setFilter] = useState("")
    const renderListOrFilteredList = (value: string) => {
        if (value === "Category") {
            setApplyFilter(false)
            console.log('equal to category')
        } else {
            setApplyFilter(true)
            setFilter(value)
            console.log(value)
        }
    }
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
                        <th className="relative">
                            <select
                                id="category"
                                className="bg-transparent"
                                onChange={(e) => renderListOrFilteredList(e.target.value)}
                            >
                                <option value="Category">Category</option>
                                {categories.map((item) => {
                                    return (
                                        <option key={item} value={item}>{item}</option>
                                    )
                                })}
                            </select>
                            <small className="absolute left-0 right-0 mx-auto top-14 font-extrabold ">No Pending tasks</small>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {applyFilter ? <TaskFilter tasks={tasks} setTasks={setTasks} filter={filter} /> :
                        tasksList}
                </tbody>
            </table>
        </div >
    )
}
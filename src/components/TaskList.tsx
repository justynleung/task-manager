import { useState } from "react"
import Task from "../assets/task"
import categories from "../assets/categories"
import TaskFilter from "./TaskFilter"
interface Props {
    tasks: Task[]
    setTasks: Function
}

export default function TaskList({ tasks, setTasks }: Props) {
    // State for conditional render filtered list or unfiltered list
    const [applyFilter, setApplyFilter] = useState(false)
    // State for passing requied filter to TaskFilter
    const [filter, setFilter] = useState("")
    const renderListOrFilteredList = (value: string) => {
        // Render taskList if no filter applied, otherwise render TaskFilter
        if (value === "Category") {
            setApplyFilter(false)
        } else {
            setApplyFilter(true)
            setFilter(value)
        }
    }
    const removeItem = (id: string) => {
        const updatedList = tasks.filter((item) => id !== item.id)
        setTasks(updatedList)
    }

    const tasksList = tasks.map((item, i) => {
        if (tasks) {
            return (
                <tr key={i} className="h-10">
                    <th>{item.title}</th>
                    <th>{item.dueDate}</th>
                    <th>{item.category}</th>
                    <th><button onClick={() => removeItem(item.id)}>Delete</button></th>
                </tr>
            )
        }
    })
    return (
        <div className="flex justify-center mb-20">
            <table className="w-full mx-4 mt-4 border-collapse">
                <thead>
                    <tr className="h-10">
                        <th>Title</th>
                        <th>Due Date</th>
                        <th className="relative">
                            <select
                                id="category"
                                className="bg-transparent"
                                onChange={(input) => renderListOrFilteredList(input.target.value)}
                            >
                                <option value="Category">Category</option>
                                {categories.map((item) => {
                                    return (
                                        <option key={item} value={item}>{item}</option>
                                    )
                                })}
                            </select>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="relative w-full">
                    {applyFilter ? <TaskFilter tasks={tasks} setTasks={setTasks} filter={filter} /> :
                        tasksList}
                </tbody>
            </table>
        </div >
    )
}
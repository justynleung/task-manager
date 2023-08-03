import Task from "../assets/task"

interface Props {
    tasks: Task[]
}

export default function TaskList({ tasks }: Props) {
    const tasksList = tasks.map((item, i) => {
        return (
            <tr key={i} className="h-10">
                <th>{item.title}</th>
                <th>{item.dueDate}</th>
                <th>{item.category}</th>
                <th><DeleteBtn /></th>
            </tr>
        )
    })
    return (
        <div className="flex justify-center">
            <table className="w-full border-2 border-[#dbe1e8] mx-4 mt-4 border-collapse">
                <thead>
                    <tr className="h-10">
                        <th>Title</th>
                        <th>Due Date</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    {tasksList}
                </tbody>
            </table>
        </div >
    )
}


const DeleteBtn = () => {
    return (
        <>
            <button className="">Delete</button>
        </>
    )
}
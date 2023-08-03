// Dependencies
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from 'uuid';
// Asset
import categories from "../categories";
// Tailwindcss
const inputClass = 'mx-4 my-2 rounded p-2'
interface Props {
    tasks: object[]
    setTasks: Function
}

export default function TaskForm({ tasks, setTasks }: Props) {
    const taskFormData = z.object({
        title: z.string()
            .min(3, { message: "Must be 3 or more characters long" })
            .max(50, { message: "Must be 50 or fewer characters long" }),
        dueDate: z.coerce.date()
            .min(new Date("01/01/2023"), { message: "The past is gone" })
            .max(new Date("01/01/2025"), { message: "Enter a date earlier than 01/01/2025" })
        ,
        category: z.enum(categories, {
            required_error: "Please select a category",
            invalid_type_error: "That's not a valid category!",
        })
    })

    type TaskFormData = z.infer<typeof taskFormData>

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskFormData>({
        resolver: zodResolver(taskFormData),
    });

    const onSubmit: SubmitHandler<TaskFormData> = (e) => {
        const newId = uuidv4().split('-').join('')
        const formatDate = e.dueDate.toLocaleDateString()
        const newList = [...tasks]
        newList.push({ ...e, id: newId, dueDate: formatDate })
        setTasks(newList)

    }
    return (
        <>
            <section>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col'>
                    <label className='mx-4 mt-4' htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder='Enter task'
                        {...register('title')}
                        className={inputClass}
                    />
                    {errors.title && (
                        <p className="text-xs italic text-red-500 mt-2 mx-4"> {errors.title?.message}
                        </p>
                    )}
                    <label className='mx-4 mt-4' htmlFor="dueDate">Due date</label>
                    <input
                        type="date"
                        id="dueDate"
                        max="9999-12-31"
                        {...register('dueDate')}
                        className={inputClass}
                    />
                    {errors.dueDate && (
                        <p className="text-xs italic text-red-500 mt-2 mx-4"> {errors.dueDate?.message}
                        </p>
                    )}
                    <label className='mx-4 mt-4' htmlFor="category">Category</label>
                    <select
                        id="category"
                        {...register('category')}
                        className={inputClass}>
                        <option>Please Select</option>
                        {categories.map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })}
                    </select>
                    {errors.category && (
                        <p className="text-xs italic text-red-500 mt-2 mx-4"> {errors.category?.message}
                        </p>
                    )}
                    <button
                        type="submit"
                        className=" text-white bg-primary-600 hover:bg-emerald-500 font-medium rounded-lg text-lg px-5 py-2.5 mx-4 mt-4 focus:outline-lime-500">Submit</button>
                    <div className={`flex justify-center items-center h-6 w-full font-bold ${tasks.length === 0 ? "text-orange-500" : "text-transparent"}`}><p>Now Or Never. Add Some Tasks!</p></div>
                </form>
            </section>
        </>
    )
}

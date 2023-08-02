import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

// Tailwindcss
const inputClass = 'mx-4 my-2 rounded p-2'

const taskFormData = z.object({
    title: z.string()
        .min(3, { message: "Must be 3 or more characters long" })
        .max(50, { message: "Must be 50 or fewer characters long" }),
    date: z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    }),
    category: z.enum(categories, {
        required_error: "Please select a category",
        invalid_type_error: "That's not a valid category!",
    })
})

const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
} = useForm<TaskFormData>({
    resolver: zodResolver(taskFormData),
});

const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    console.log(data);
}

type TaskFormData = z.infer<typeof taskFormData>

export default function TaskForm() {
    return (
        <>
            <section className='w-screen h-screen'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col'>
                    <label className='mx-4 mt-4' htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder='Enter task'
                        {...register('title')}
                        className={inputClass}
                    />
                    <label className='mx-4 mt-4' htmlFor="dueDate">Due date</label>
                    <input
                        type="text"
                        id="dueDate"
                        {...register('date')}
                        className={inputClass}
                    />
                    <label className='mx-4 mt-4' htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        {...register('category')}
                        className={inputClass}
                    />
                    <button
                        type="submit"
                        className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 mx-4 mt-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                </form>
            </section>
        </>
    )
}

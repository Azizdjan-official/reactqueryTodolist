import React from 'react'
import { useForm } from 'react-hook-form'
import { useCreateTodo } from '../pages/todo/service/mutation/useCreateTodo';
import { client } from './../config/queryclient';
import { Spinner } from 'react-bootstrap';



const Form = () => {
    const { register,handleSubmit, reset,setError} = useForm();
    const {mutate, isPending}= useCreateTodo()
    const submit = (data)=>{
        mutate(data,{
            onSuccess:(res)=>{
                console.log(res);
                reset();
                client.invalidateQueries({queryKey:["todoloop"]})
            },
            onError:(error)=>{
                setError("title", {message: "title togri kirit bratishka"})
            }
        })
        
    }
    return (
    <div className='p-5 border h-[35    vh] bg-yellow-200 flex items-center  justify-center'>
      <form className='border border-white p-6  rounded-md shadow-lg' onSubmit={handleSubmit(submit)}>
        <div>
            <input className='border my-2 py-2 px-4 rounded-md outline-none' placeholder='title' {...register("title", {required:true})} type="text" />
        </div>
        <div>
            <input className='border my-2 py-2 px-4 rounded-md outline-none' placeholder='description' {...register("description", {required:true})} type="text" />
        </div>
        <button type='submit' className='bg-cyan-400 text-white font-bold w-full px-3 py-2 rounded-md'>{isPending ? <Spinner animation="border" variant="primary" /> : "Send"}</button>
      </form>
    </div>
  )
}

export default Form

import React from 'react'
import { useDeleteTodo } from '../pages/todo/service/mutation/useDeleteTodo'
import { client } from '../config/queryclient'
import { Button, Spinner } from 'react-bootstrap'


const Card = (props) => {
    const { mutate, isPending} = useDeleteTodo(props.id)

    const deleteTodo = () => {
        mutate(null, {
            onSuccess:() => {
                client.invalidateQueries({queryKey:["todoloop"]});
            }
        })
    }
  return (
    <div className='border p-5 my-2 w-[90%] mx-auto rounded-lg  bg-slate-300'>
      <h1 className='text-4xl my-2 '>Title: <strong>{props.title}</strong></h1>
      <h1 className='text-xl my-2'>Description: <strong> {props.description}</strong></h1>
      
      <div onClick={deleteTodo}>
      {isPending ? 
        <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button> 
      : <button  className="bg-red-500 rounded-md px-3 py-2 text-white">Delete</button>}
      </div>
    </div>
  )
}

export default Card

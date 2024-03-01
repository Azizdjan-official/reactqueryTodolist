import { useMutation } from "@tanstack/react-query"
import { request } from './../../../../config/request';



export const useDeleteTodo = (id) => {
  return useMutation({
    mutationFn:()=> request.delete(`/todos/${id}`).then((res)=> res.data)
  })
}

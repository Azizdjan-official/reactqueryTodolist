import { useMutation } from "@tanstack/react-query"
import { request } from './../../../../config/request';


export const useCreateTodo = () => {
  return useMutation({
    mutationKey:["post-todo"],
    mutationFn:(data)=> request.post("/todos", data).then((res)=> res.data)
  })
}

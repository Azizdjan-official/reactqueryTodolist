import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import { request } from './../../../../config/request';


export const useGetTodo = (page = 1) => {

  return useInfiniteQuery({
    queryKey:["todoloop"],
    initialPageParam:1,
    queryFn:({ pageParam })=> 
      {
        return  request.get("/todos", {params:{_page: pageParam,_limit: 4}}).then((res)=> res.data)
      },
      getNextPageParam:(lastPage,allPage,params)=>{
        // console.log(lastPage,"lastpage");
        // console.log(allPage,"allpage");
        // console.log(params,"params");
        return params ;
      }
  })
}



// Pagination and getting data  ///

// return useQuery({
//   queryKey:["todo",page],
//   queryFn:()=> request.get("/todos", {params:{_page: page , _limit: 3}}).then((res)=> {
//     const pageSize = Number(res?.headers?.get("X-Total-Count")) / 3;
//     return {
//       data: res.data,
//       pageSize: Math.ceil(pageSize),
//     }
//   })
// })


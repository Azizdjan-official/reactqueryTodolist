import React, { useState } from 'react'
import { useGetTodo } from './service/query/useGetTodo'
import Card from '../../component/Card';
import Form from '../../component/Form';
import { useInView } from 'react-intersection-observer';
import Spinner from 'react-bootstrap/Spinner';



const Todo = () => {
    // const [page,setPage] = useState(1);            used this code for pagination
    const {data, isLoading,fetchNextPage,hasNextPage} = useGetTodo();
    const { inView,ref}= useInView();
    React.useEffect(()=>{
        if(inView && hasNextPage){
            fetchNextPage()
        }
    },[inView])
    // const buttons = Array([data?.pageSize]).fill(null)        used this code for pagination
    // const changePage = (page)=> {                       useGettodo ichiga (page) qoyish kerak
    //     setPage(page)
    //     console.log(page);
    // }
  return (
    <div>
        <Form/>
      <div className=' flex flex-col items-center justify-center relative'
      >
      {isLoading ? <Spinner className='absolute top-44'  animation="border" variant="dark" /> : 
      <>
      {/* {data.data?.map(( obj)=> <Card key={obj.id} {...obj}/>)} */}
        {data.pages.map((page)=>
            page.map((item)=> <Card key={item.id} {...item}/>)
        )}
      </>}
      </div>
      <div className='flex justify-center gap-4'>
        {/* {buttons?.map((_, i)=> (
            <button onClick={()=> changePage(i + 1)} className='bg-green-400 p-3' key={i}>{i+1}</button>
        ))} */}
        {hasNextPage && < div ref={ref}>{inView ? <div className='my-20'><Spinner animation="border" variant="primary" /></div>: ""}</div>}
        {/* <button className='bg-cyan-500 p-3' onClick={()=> fetchNextPage()}>view more</button> */}
 
      </div>
    </div>
  )
}

export default Todo

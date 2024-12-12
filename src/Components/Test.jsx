import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/action'

const Test = () => {
    const dispatch=useDispatch()
    const {data,loading,error}=useSelector((state)=>state.data)
    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])

    if (loading) return <p>loading...</p>
    if (error) return <p>Error: {error}</p>
    console.log(data)
  return (
    <div>
        TEST
        {data.map((val,index)=>{
            return <p key={index}>{val.name}</p>
        })}
    </div>

  )
}

export default Test
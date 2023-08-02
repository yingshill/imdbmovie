"use client";

import React from 'react'
import { useEffect} from 'react'

export default function Error({ error, reset }) {
    useEffect(()=>{
        console.log(error);
    }, [error])
  return (
    <div className="text-center mt-10">
      <h2 >Something went wrong</h2>
      <button className="hover:text-amber-500"onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

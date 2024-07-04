import React from 'react'
import { Circles } from 'react-loader-spinner'
import './Loader.css'

export default function Loader() {
  return (
    <div className='loading-overlay'>
        <Circles
            height="80"
            width="80"
            color="#9a55ff"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
    
  )
}

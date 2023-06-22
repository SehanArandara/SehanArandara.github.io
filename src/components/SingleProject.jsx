import React from 'react'



const SingleProject = (props) => {

    
  return (

    
    <div className='lg:flex-row lg:w-[1200px] mx-auto rounded-lg shadow-lg shadow-[#212832] '>
        <div className='bg-white  rounded-xl '>
            <img className='rounded-lg h-[180px]' src={props.image}/>
            
            <div className=' bg-[#161B22] p-6 flex flex-col justify-between h-[350px] text-white rounded-lg'>
                <h1 className = 'mb-3 font-bold text-2xl'>{props.topic}</h1>
                <p className='text-justify text-sm '>{props.desc}</p>
                <a href = {props.url}>
                    <button className='bg-slate-700 text-white p-2 rounded-md mt-auto w-full hover:border-[#00dbfe] hover:bg-slate-700 '>See more</button>
                </a>
               
            </div>
            
        </div>
    </div>
  )
}

export default SingleProject
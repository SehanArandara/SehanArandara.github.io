import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
import {BsSend} from "react-icons/bs"

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'> 
        <form method='POST' action="https://getform.io/f/b3720dba-6c96-4e2b-b34b-038561772c17" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00dbfe] text-[#00dbfe]'>Contact </p>
            </div>
            <input className='text-black bg-[#ccd6f6] p-2 rounded-lg' type="text" placeholder='Name' name='name' required/>
            <input className='text-black my-4 p-2 bg-[#ccd6f6] rounded-lg' type="email" placeholder='Email' name='email' required/>
            <textarea className='text-black bg-[#ccd6f6] p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>
            <button className='hover:text-black bg-slate-600 text-white border-2 hover:bg-slate-700 rounded-md border-2 border-transparent hover:border-white flex items-center hover:border-[#00dbfe] rounded-lg w-[100px]  px-4 py-3 my-8 mx-auto flex '>Send <BsSend /></button>
        </form>
    </div>       
  )
}

export default Contact
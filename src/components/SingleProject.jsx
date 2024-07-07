import React from 'react';

const SingleProject = (props) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-[180px] object-cover' src={props.image} alt={props.topic} />
      <div className='bg-[#161B22] p-6 flex flex-col justify-between h-[350px] text-white'>
        <h1 className='mb-3 font-bold text-2xl'>{props.topic}</h1>
        <p className='text-justify text-sm'>{props.desc}</p>
        <a href={props.url}>
          <button className='bg-slate-700 text-white p-2 rounded-md mt-auto w-full hover:border-[#00dbfe] hover:bg-slate-700'>See more</button>
        </a>
      </div>
    </div>
  );
};

export default SingleProject;

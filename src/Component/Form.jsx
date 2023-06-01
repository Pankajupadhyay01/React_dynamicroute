import React from 'react';

const Form = () => {
    function func(e) {
        e.preventDefault()
    }
  return (
    <div className='flex w-full m-auto justify-center items-center'>
     <form onSubmit={func}  className='flex flex-col w-[80%] md:w-[40%] space-y-2 py-4 bg-white rounded-3xl'>
        <div className='flex justify-center m-auto text-4xl font-semibold'>
          Book A Movie Now 
        </div>
        <input type="text"  className='border-b-2 border-b-gray-500 outline-none py-3 w-[70%] flex m-auto' placeholder='Enter Your Name' />
        <input type="email" className='border-b-2 border-b-gray-500 outline-none py-3 w-[70%] flex m-auto' placeholder='Enter Your Email' />
        <input type="text" className='border-b-2 border-b-gray-500 outline-none py-3 w-[70%] flex m-auto' placeholder='enter your Contact number' />
        <input type="text" className='border-b-2 border-b-gray-500 outline-none py-3 w-[70%] flex m-auto' placeholder='enter password' />
        <button type='submit' className='bg-purple-500 text-white w-[60%] m-auto flex text-center justify-center rounded-[20px] p-[10px_20px]'>Submit</button>
      </form>

    </div>
  );
}

export default Form;

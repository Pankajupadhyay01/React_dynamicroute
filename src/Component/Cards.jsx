import React from 'react';

const Cards = ({ title ,imgs ,name,date,rating}) => {
  return (
    <>


        <div className="flex flex-col bg-gray-300 h-[56vh] w-full text-center items-center">

          <div className="w-full h-[45vh] flex">
            <img className='w-full h-full ' src={imgs} alt="" />
          </div>

          <div className="text-xl flex justify-center items-center md:h-[8vh] text-center align-middle  w-full font-medium overflow-hidden text-ellipsis ">
            {!title ? name : title.split(':')[0] }
          </div>

          <div className="flex justify-between w-full font-normal px-[10px]">
            <div className='text-yellow-700  flex items-center'>
              <ion-icon name="star"></ion-icon>
              {!rating ? "No review" : rating}
            </div>

            <div className='font-medium flex items-center text-green-600'>
              
              {date}
            </div>

          </div>

        </div>

    </>

  );
}

export default Cards;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Slug = () => {
    const [post, setpost] = useState([]);
    const [img, setimg] = useState();

    const { movid } = useParams();
    const id = useParams().data
    useEffect(() => {

        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then(res => {
                setpost(res.data)
                setimg(res.data.image.medium)
            }).catch((e) => {
                alert("Something Went Wrong ")
            })

    }, [post]);
    return (
        <div>   
          <div className='m-auto w-full text-center justify-center items-center text-5xl text-blue-500'>{post.name}</div>  
            <div className='my-[10px] flex md:flex-row flex-col m-auto w-[80%] md:justify-between'>
                <div className="w-full md:w-[50%] h-[45vh] flex">
                    <img src={img} className='w-full h-full'  alt="" />
                </div>
                <div className='w-full md:w-[40%] text-lg font-blue-400'>
                    {post.summary}
                    <div className='my-5'>
                    <Link to='/form' className='cursor-pointer border-2  rounded-[20px] p-[4px_12px] hover:bg-gray-400 hover:shadow-2xl text-white bg-gray-500'>Book A Movie</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slug;

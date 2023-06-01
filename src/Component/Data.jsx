import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Data = () => {
    const [post, setpost] = useState([]);
    const { movid } = useParams();
    const id = useParams().data
    useEffect(() => {

        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then(res => {
                setpost(res.data)

            }).catch((e) => {
                alert("Something Went Wrong ")
            })

    }, []);
    return (
        <>
            <div className='my-[10px] flex md:flex-row flex-col m-auto w-[80%] md:justify-between'>
                <div className="w-full md:w-[50%] h-[45vh] flex">
                    <img className='w-full h-full ' src={post.image.medium} alt="" />
                </div>
                <div className='w-full md:w-[40%] text-lg font-blue-400'>
                   <h1>{post.name}</h1>
                    {post.summary}
                </div>
            </div>
        </>
    );
}

export default Data;

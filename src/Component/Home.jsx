import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import { Link } from 'react-router-dom';
const Home = () => {
    const [post, setpost] = useState([]);

    // Api fetching 

    useEffect(() => {

        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(res => {
                setpost(res.data)

            }).catch((e) => {
                alert("Something Went Wrong ")
            })

    }, []);






    return (

        <div>

            <div className="flex justify-center md:justify-between w-[80%] m-auto items-center p-[20px] flex-wrap">

                {
                    post.map(pro => (
                         <Link to={"/series/"+pro.show.id} className='flex pb-[10px] flex-col flex-wrap justify-center items-center m-auto w-[100%] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)] hover:translate-y-[-3px] '>
                            <Cards key={pro.show.id}
                                imgs={pro.show.image.medium}
                                title={pro.show.name}
                                name={pro.show.name}
                                date={pro.show.premiered}
                                rating={pro.show.rating.average} /> 
                        </Link>
                            ))
                }


                        </div>



        </div>
            );
}


            export default Home;
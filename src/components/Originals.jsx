import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectOriginal } from '../feature/moviesSlice';



const Originals = () => {
  const movies = useSelector(selectOriginal);
  return (
    <div className='my-[100px] px-6 '>

      <div >
        <h3 className='text-[white] text-[40px] pb-[50px]'>Originals</h3>
      </div>

      <div className='flex items-center justify-between gap-[25px]'>
      {movies &&
          movies.map((movie, key) => (
            <div className='w-[20%] rounded-[10px] relative cursor-pointer overflow-hidden recom' key={key}>
              
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Originals

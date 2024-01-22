import React, { useEffect, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, onSnapshot} from 'firebase/firestore';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';







const Detailes = () => {
 
    const { id} = useParams();
   
   
    const [item, setItem] = useState({});
    const {backgroundImg,titleImg,subTitle,description,title} = item
    useEffect(() => {
        const fetchItem =  () => {
          try {
            // Fetch data from Firestore based on itemId
            onSnapshot(doc(db,"movies",id),(doc) =>{
              if(doc.data()){
                setItem(doc.data())
              } 
            })
          } catch (error) {
            console.error('Error fetching item:', error);
          }
        };
    
        fetchItem();

      }, [id]);
      const [trailerUrl,setTrailerUrl] = useState("")
      const opts = {
        height: "300px",
        width: "100%",
        playerVars:{
            
        autoplay:1
        }
    }
    const handelClick = () =>{
      if(trailerUrl){
      setTrailerUrl("")
      }else{
      movieTrailer(title || "")
      .then((url) =>{
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))  
      })
      .catch((error) =>{
       alert(error)
      })
      }
      
      
      }
      console.log(item)
  return (
    <div className='relative w-full h-full'>
      <div className='absolute w-full h-full bg-black opacity-50'></div>
      <div>
        <img src={backgroundImg} alt="" className='fixed top-[0px] left-[0px] z-[-1] w-full h-full object-cover'/>
      </div>
      <div className='pt-[10vw] relative left-7'> 
      <div className='w-[400px] h-[200px] '>

      <img src={titleImg} alt=""  />
      </div>
      <div className='flex items-center gap-3 relative py-10  '>
        <div><button className='w-[150px] h-[40px] bg-[white] rounded-lg flex items-center justify-center gap-2'onClick={() => handelClick()} ><FaPlay /> PLAY</button></div>
        <div><button className='w-[150px] h-[40px] bg-[white] rounded-lg flex items-center justify-center gap-2' onClick={() => handelClick()}><FaPlay />TRAILER</button></div>
        <div><button className='w-[50px] h-[50px] bg-[white] rounded-[50%] flex items-center justify-center gap-2'><FaPlus /></button></div>
        <div><button className='w-[50px] h-[50px] bg-[white] rounded-[50%] flex items-center justify-center gap-2'><HiUserGroup /></button></div>

       
      </div>
      <div className='relative '> <div>
<h5 className='text-white text-xl'>{subTitle}</h5>
<p className='text-white text-[15px] font-thin pt-3 w-[40%]'>{description}</p>
        </div></div>
        </div>
        <div className='pt-5'> <YouTube videoId={trailerUrl} opts={opts} className='relative top-[300%]'/></div>  
    </div>
  )
}

export default Detailes

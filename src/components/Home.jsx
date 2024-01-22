import React, { useEffect } from 'react'
import BannerSlider from './BannerSlider'
import HoverVideo from './HoverVideo'
import Recommended from './Recommended'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../feature/moviesSlice'
import { selectUserName } from '../feature/userSlice'
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore'
import Footer from './Footer'






const Home = () => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
const movieRespon = collection(db,'movies')
getDocs(movieRespon)
.then(respon =>{
  respon.docs.map((doc) =>{
    
    switch (doc.data().type) {
      case "recommend":
        recommends = [...recommends, { id: doc.id, ...doc.data() }];
        break;

      case "new":
        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
        break;

      case "original":
        originals = [...originals, { id: doc.id, ...doc.data() }];
        break;

      case "trending":
        trending = [...trending, { id: doc.id, ...doc.data() }];
        break;
    }
  })

  dispatch(
    setMovies({
      recommend: recommends,
      newDisney: newDisneys,
      original: originals,
      trending: trending,
    })
  );
})


   
  }, [userName]);

  return (
    <div className='home w-full h-full'>
      <BannerSlider/>
      <HoverVideo/>
      <Recommended/>
      <NewDisney/>
      <Originals/>
      <Trending/>
      <Footer/>
    </div>
  )
}

export default Home

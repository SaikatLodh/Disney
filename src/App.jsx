import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import Detailes from './components/Detailes'
import { selectUserEmail, setUserLoginDetails ,selectUserName, seleteLoading,setLoading} from './feature/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'
import Loader from './components/Loader'
import WatchList from './components/WatchList'













function App() {
  const dispatch = useDispatch()
const user = useSelector(selectUserName)
const loading = useSelector(seleteLoading)

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch(
        setUserLoginDetails(selectUserName)
      );
      dispatch(setLoading(false));
     
    } else {
      dispatch(setLoading(false));
      console.log("User is not logged in.");
    }
  });
}, []);

  return (
    <>
    <div className='overflow-hidden'>

    <BrowserRouter>
        <Header />
        <Routes>
          {loading? <> <Route path='/' element={<Loader/>}/></> : <>{user ? <Route path='/' element={<Home/>}/> : <Route path='/' element={<Login />} />}</>}

          <Route path="/detail/:id" element={<Detailes/>}/>
          <Route path='/watchlist' element={<WatchList/>}/>
          
        </Routes>
        
      </BrowserRouter>
    </div>
     

    </>
  )
}

export default App

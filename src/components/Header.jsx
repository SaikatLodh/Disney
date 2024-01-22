import React, { useEffect } from 'react'
import { auth, db } from "../firebase";
import img from '../assets/image/logo.svg'
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { BsCameraReels } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../feature/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';







const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const username = useSelector(selectUserName)
  const useremail = useSelector(selectUserEmail)
  const userphoto = useSelector(selectUserPhoto)



  const handel = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((result) => {

      dispatch(
        setUserLoginDetails({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );

      
      navigate("/");
    }).catch((error) => {
      alert(error.message)
    })

  }

  const signOut = () => {
    if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  }
  return (
    <div className='bg-[#080913] w-full h-[100px] flex items-center justify-between px-6'>

      <div className='flex items-center gap-10 w-[100%] justify-between'>
        <img src={img} alt="" className='w-[100px] cursor-pointer' />
        {!username ? <> <div>

          <button className='w-[100px] h-[40px] border-2 text-[white] rounded-xl hover:bg-[white] hover:text-[black] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ' onClick={handel}>LOGIN</button>

        </div>
        </> :
          <>
            <div className='flex items-center justify-center gap-5'>
              <div className='flex items-center gap-3 cursor-pointer'>
                <IoHomeOutline className='text-[white]' />
                <h6 className='text-[white]'>HOME</h6>
              </div>

              <div className='flex items-center gap-3 cursor-pointer'>
                <IoSearchOutline className='text-[white]' />
                <h6 className='text-[white]'>SEARCH</h6>
              </div>
              <Link to="/watchlist"><div className='flex items-center gap-3 cursor-pointer'>
                <IoMdAdd className='text-[white]' />
                <h6 className='text-[white]'>WATCHLIST</h6>
              </div></Link>



              <div className='flex items-center gap-3 cursor-pointer'>
                <IoIosStar className='text-[white]' />
                <h6 className='text-[white]'>ORIGINALS</h6>
              </div>


              <div className='flex items-center gap-3 cursor-pointer'>
                <BsCameraReels className='text-[white]' />
                <h6 className='text-[white]'>MOVIES</h6>
              </div>

              <div className='flex items-center gap-3 cursor-pointer'>
                <BsCameraVideoFill className='text-[white]' />
                <h6 className='text-[white]'>SERIES</h6>
              </div>
            </div>
            <div className='button-hover'>
              <img src={userphoto} alt={username} className='w-[30px] h-[30px] rounded-[50%] cursor-pointer' />

              <button className='w-[100px] h-[40px] border-2 text-[white] rounded-xl hover:bg-[white] hover:text-[black] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 button' onClick={signOut}>Logout</button>
            </div>
          </>}

      </div>

    </div>
  )
}

export default Header

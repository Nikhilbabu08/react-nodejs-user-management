import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const user = useSelector(store => store.auth.user)
  useEffect(()=>{
    console.log(user)
  },[])
  return (
    <div>
      user data
    </div>
  )
}

export default Home

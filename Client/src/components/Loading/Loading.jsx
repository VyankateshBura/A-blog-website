import React from 'react'
import Spinner from 'react-spinkit'
const Loading = () => {
  return (
    <div>
        <Spinner className="loading text-center" style={{marginTop:"40vh"}} name="three-bounce" color="rgb(5, 53, 121)" fadeIn="none"></Spinner>
    </div>
  )
}

export default Loading
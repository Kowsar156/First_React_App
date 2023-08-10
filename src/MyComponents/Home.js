import React from 'react'

export const Home = () => {
    let myStyle = {
        minHeight: "80vh",
        margin: "40px auto",
        justifyContent: "center",
        alignItems: "center"
    }

  return (
    <div className='container' style={myStyle}>
        <img src={require('./irony.png')} alt="আইরোনি" height="550px" width="350px"/>
    </div>
  )
}

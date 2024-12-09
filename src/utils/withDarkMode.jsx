import React from 'react'

const withDarkMode = (Component) => {
    const style = {
        backgroundColor: "#0D0D0D",
        color:"#fff",
        height:'100vh'
    }
  return(props) => {
   return <div style={style}><Component {...props} /></div>
  }
}

export default withDarkMode
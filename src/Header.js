import React from 'react'//props contain all the parent properties that have been passed to the child

const Header = ({title}) => {
 

  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}



export default Header
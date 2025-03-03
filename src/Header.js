import React from 'react'//props contain all the parent properties that have been passed to the child

const Header = ({title}) => {
 

  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps ={   //component expects a prop , when it doesn't send one, it uses the default props
  title: "Default title"
}

export default Header
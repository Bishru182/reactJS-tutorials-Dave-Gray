import React from 'react'
import { useState } from 'react';

const Content = () => {
  const [name,setName] = useState ('dave');
    const handleNameChange = () => {
        const names = ['bob', 'kevin', 'dave'];
        const int = Math.floor(Math.random() * 3); /*  math.random=>produces random decimal numbers eg
                                                    eg;0.00 to 0.99999
                                                     math.random()*3 => decimal numbers produced are multiplied by 3....therefore 0.0000to 2.999
                                                     math.floor => above generated numbers will be round off to the nearest whole number
                                                     SO THE OUTPUT => 0,1,2  */
        setName(names[int]); 
      }

      const handleClick =() => {
        console.log('you clicked it');
      }

      const handleClick2 =(name) => {
        console.log(`${name} was clicked`);/* use backticks here */
      }
      const handleClick3 =(e) => {
        console.log(e.target.innerText);
      }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>change name</button>
        <button onClick={() => handleClick2('Dave')}>click it</button>
        <button onClick={(e) => handleClick3(e)}>click it</button>
    </main>
  )
}

export default Content
import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items,setItems] = useState ([
    {
      id:1,
      checked: false,
      item: "1 kg rice"
    },
    { id:2,
      checked: false,
      item: "item 2"
    },
    {
      id:3,
      checked: false,
      item: "item 3"
    }

  ]);

  return (
    <main>
       <ul>
        {items.map((item) => ( 
          <li className='item' key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt 
                role="button" 
                tabIndex="0"/* makes the trash icon focussable, so it gets activated by pressing ENTER OR SPACE  */
            />

          </li>

        ))}
       </ul>
        
    </main>
  )
}

export default Content
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => ( 
            <li className='item' key={item.id}>
              <input
                type="checkbox"
                onChange={()=>handleCheck(item.id)}
                checked={item.checked}
              />
              <label
              style={(item.checked) ? {textDecoration: 'line-through'} : null}
              onDoubleClick={()=>handleCheck(item.id)}>
                {item.item}</label>
              <FaTrashAlt 
                  onClick={() => handleDelete(item.id)}
                  role="button" 
                  tabIndex="0"/* makes the trash icon focussable, so it gets activated by pressing ENTER OR SPACE  */
              />

            </li>

          ))}
        </ul>
      ) : (
        <p style={{marginTop: '2rem' }}>your list is empty</p>

      ) }
        
    </main>
  )
}

export default Content
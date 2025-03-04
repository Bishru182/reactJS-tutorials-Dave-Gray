import { FaTrashAlt } from 'react-icons/fa';
import React from 'react'

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item' >
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
                  aria-label={`Delete ${item.item}`}
              />

            </li>
  )
}

export default LineItem
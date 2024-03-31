import React from 'react'
import { menuOptions } from '../../models/MenuModel'

function OptionButtons() {
  return (
    <ul className='option-buttons'>
        {menuOptions.map((item)=> (
            <li key={item.id}>{item.label}</li>
        ))}
        
    </ul>
  )
}

export default OptionButtons
import React, { MouseEventHandler } from 'react'
import Option from './Option';
import optionObjects from '../../data/MenuOptions';
import {OptionsProps} from '../../interfaces/index';

const Options:React.FC<OptionsProps> = (props) => {

   console.log(this)
  return (
   <div id="optionsFrame">

     {optionObjects.map(({value, id, name, status, handler}) => {
        return (
         <Option value={value} key={id} className={status} name={name} handler={handler}/>
        )
     })}
     </div>
  )
}

export default Options;
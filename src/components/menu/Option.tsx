import React from 'react';
import { OptionsProps} from '../../interfaces/index';

const Option = ({id, name, value, className, handler}: OptionsProps) => {
   let classes = `menuOption ${className}`
  return (
    <button key={id} className={classes} onClick={((e) => {
       handler(value)
    })}>
       {name}
    </button>
  )
}

export default Option;
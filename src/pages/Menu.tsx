import React, { useState } from 'react';
import Layout from '../components/menu/Layout'
import { MenuProps } from '../interfaces/index'
// *** Main entry point to Views *** //
const Menu:React.FC<MenuProps> = ({handler}) => {

  return (
    <div id="mainContainer">
            <Layout handler={handler}/>
    </div>
  )
}

export default Menu;
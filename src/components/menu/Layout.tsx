import React, {useState} from 'react';
import {LayoutProps} from '../../interfaces/Props/Main';
import Options from './Options';
import Title from './Title';

const Layout:React.FC<LayoutProps> = ({handler}) => {
  return (
   <div id="mainMenuFrame">
      <Title />
      <Options handler={handler}/>
   </div>
  )
}

export default Layout;
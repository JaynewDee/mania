import React, { useState } from 'react';
import Menu from './pages/Menu';
import GameBoard from './pages/GameBoard';
import Difficulty from './components/menu/Difficulty';
import Settings from './components/menu/Settings';
import {AppProps} from './interfaces/index';

const App:React.FC<AppProps> = ({handler}) => {

   const [mode, setMode] = useState<string>("menu");

   const modeSwitch = (modeValue: string) => {
      switch(modeValue){
         case "menu":
            return <Menu handler={setMode} />
         case "launch_game":
            return <GameBoard />
         case "change_difficulty":
            return <Difficulty />
         case "change_settings":
            return <Settings />
         default:
            break
      }
   }
   const renderMenu = () => {
      return <Menu handler={setMode} />
   }
   console.log(mode)
   
  return (
    <div className="App">
       <button onClick={(() => {setMode("menu")})}></button>
       {modeSwitch(mode)}
       
    </div>
  );
}

export default App;

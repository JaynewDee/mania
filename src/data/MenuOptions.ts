import {OptionsProps} from '../interfaces/index';

const optionObjects: OptionsProps[] = [
   {
      id: 'play',
      name: 'PLAY',
      status: 'inactive',
      value: 'launch_game'
   },
   {
      id: 'diff',
      name: 'Change Difficulty',
      status: 'inactive',
      value: 'change_difficulty'
      
   },
   {
      id: 'settings',
      name: 'Gameplay Settings',
      status: 'inactive',
      value: 'change_settings'
   }
]

export default optionObjects;
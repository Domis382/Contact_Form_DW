import './App.css'
{/*import Card from './components/Card'
import { Button } from './components/Card'*/}

import Description from './components/description/Description';
import Hobbies from './components/hobbies/Hobbies';
import Experience from './components/experience/Experience';
import Aceptar from './components/button/Aceptar';
import Cerrar from './components/button/Cerrar';

function App() {


  return (
    <>
      {/*<Card></Card> 
      <Button></Button>*/}

      <Description></Description>
      <Hobbies></Hobbies>
      <Experience></Experience>
      <Aceptar></Aceptar>
      <Cerrar></Cerrar>
    </>
  )
}

export default App

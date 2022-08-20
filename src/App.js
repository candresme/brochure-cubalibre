import './App.css';

//Import animation
import Slide from 'react-reveal/Slide';

//Import Views
import { D1 } from './Views/D1';
import { D2 } from './Views/D2';


function App() {
  return (
    <div>
      <Slide left cascade>
        <D1 />
        <D2 />
      </Slide>    
      
    </div>
  );
}

export default App;

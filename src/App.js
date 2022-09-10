import './App.css';
import { useRoutes } from "react-router-dom";
import NavBar from './components/NavBar';
import myRoutes from './routes';

function App() {
  let element = useRoutes(myRoutes);
  return (
    <div className='App'>
      <NavBar />
      {element}
    </div>
  );
}

export default App;


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';

function App() {
  
  return (
    <>
     <Navbar/>
     <div className="container">
      <Dashboard/>
     </div>
    </>
  )
}

export default App

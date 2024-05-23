import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';


function App() { 

  return (
    <div className="min-h-screen max-h-full bg-gradient-to-t from-gray-400 to-gray-800">
      <Navbar/>
      <Home/>    
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

const App: React.FC = ()=>{

  return(

    <div className="app">
    
      <BrowserRouter>

        <Navbar/>
      
        <div className="pages">

          <Routes>
          
            <Route path="/" element={<Home/>} />
            
          </Routes> 

        </div>
      
      </BrowserRouter>
    
    </div>

  )

}

export default App
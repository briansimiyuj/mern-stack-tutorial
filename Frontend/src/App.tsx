import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { WorkoutContextProvider } from "./context/WorkoutContext"

const App: React.FC = ()=>{

  return(

    <div className="app">
    
      <BrowserRouter>

        <Navbar/>
      
        <div className="pages">

          <WorkoutContextProvider>

            <Routes>
          
              <Route path="/" element={<Home/>}/>

            </Routes> 
            
          </WorkoutContextProvider>

        </div>
      
      </BrowserRouter>
    
    </div>

  )

}

export default App
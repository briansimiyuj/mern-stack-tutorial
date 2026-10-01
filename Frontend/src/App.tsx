import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { WorkoutContextProvider } from "./context/WorkoutContext"
import { AuthContextProvider } from "./context/AuthContext"
import Register from "./pages/Register"

const App: React.FC = ()=>{

  return(

    <div className="app">
    
        <BrowserRouter>

            <AuthContextProvider>

                <Navbar/>
            
                <div className="pages">

                    <WorkoutContextProvider>

                        <Routes>
                    
                          <Route path="/" element={<Home/>}/>

                        </Routes> 
                        
                    </WorkoutContextProvider>

                    <Routes>

                        <Route path="/register" element={<Register/>}/>

                    </Routes>

                </div>

            </AuthContextProvider>
        
        </BrowserRouter>
    
    </div>

  )

}

export default App
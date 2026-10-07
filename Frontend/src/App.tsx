import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { WorkoutContextProvider } from "./context/WorkoutContext"
import { AuthContextProvider } from "./context/AuthContext"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"

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

                        <Route path="/signin" element={<SignIn/>}/>

                    </Routes>

                </div>

            </AuthContextProvider>
        
        </BrowserRouter>
    
    </div>

  )

}

export default App
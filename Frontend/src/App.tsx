import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { WorkoutContextProvider } from "./context/WorkoutContext"
import { AuthContextProvider } from "./context/AuthContext"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import PrivateRoute from "./components/PrivateRoute"

const App: React.FC = ()=>{

    return(

        <div className="app">
    
            <BrowserRouter>

                <AuthContextProvider>

                    <Navbar/>
            
                    <div className="pages">

                        <Routes>

                            <Route element={<PrivateRoute/>}>

                                <Route
                                    path="/"
                                    element={
                                        <WorkoutContextProvider>
                                            <Home/>
                                        </WorkoutContextProvider>
                                    }
                                />

                            </Route>

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
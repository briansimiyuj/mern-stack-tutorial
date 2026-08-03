import { useEffect, useState } from "react"
import type { WorkoutType } from "../assets/types/WorkoutType"
import WorkoutDetails from "../components/WorkoutDetails"

const Home: React.FC = ()=>{

    const [workouts, setWorkouts] = useState<null | WorkoutType[]>(null)

    useEffect(() =>{
    
        const fetchWorkout = async() =>{
        
            const response = await fetch("http://localhost:4000/api/workouts"),
                  data = await response.json()
        
            if(response.ok){

                console.log(data)
                
                setWorkouts(data)

            }
            
        }

        fetchWorkout()
    
    }, [])

    return(

        <div className="home">
            
            <div className="workouts">

                {
                
                    workouts && workouts.map(workout =>(
                
                        <WorkoutDetails workout={workout} key={workout._id}/>
                
                    ))
                
                }

            </div>

        </div>

    )

}

export default Home
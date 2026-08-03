import { useEffect, useState } from "react"
import type { WorkoutType } from "../assets/types/WorkoutType"

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

            console.log(data)

            console.log(workouts)
            
        }

        fetchWorkout()
    
    }, [])

    return(

        <div className="home">
            
            <div className="workouts">

                {
                
                    workouts && workouts.map(workout =>(
                
                        <p key={workout._id}>{workout.title}</p>
                
                    ))
                
                }

            </div>

        </div>

    )

}

export default Home
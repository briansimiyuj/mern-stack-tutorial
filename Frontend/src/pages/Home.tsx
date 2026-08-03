import WorkoutDetails from "../components/WorkoutDetails"
import { useWorkoutContext } from "../context/WorkoutContext"
import WorkoutForm from "../components/WorkoutForm"

const Home: React.FC = ()=>{

    const { workouts } = useWorkoutContext()

    return(

        <div className="home">
            
            <div className="workouts">

                {
                
                    workouts && workouts.map(workout =>(
                
                        <WorkoutDetails workout={workout} key={workout._id}/>
                
                    ))
                
                }

            </div>

            <WorkoutForm/>

        </div>

    )

}

export default Home
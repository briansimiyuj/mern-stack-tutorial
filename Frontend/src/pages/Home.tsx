import WorkoutDetails from "../components/WorkoutDetails"
import DeleteWorkoutModal from "../components/Modals/DeleteWorkoutModal"
import EditWorkoutModal from "../components/Modals/EditWorkoutModal"
import ViewWorkoutModal from "../components/Modals/ViewWorkoutModal"
import { useWorkoutContext } from "../context/WorkoutContext"
import WorkoutForm from "../components/WorkoutForm"

const Home: React.FC = ()=>{

    const { workouts,  } = useWorkoutContext()

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

            <ViewWorkoutModal/>

            <EditWorkoutModal/>

            <DeleteWorkoutModal/>

        </div>

    )

}

export default Home
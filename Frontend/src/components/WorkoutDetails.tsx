import { useWorkoutContext } from "../context/WorkoutContext"
import type { WorkoutType } from "../assets/types/WorkoutType"

interface WorkoutDetailsProps{

    workout: WorkoutType

}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ workout })=>{

    const { setModalOpen, setSelectedWorkout, setModalType } = useWorkoutContext()

    return(

        <div className="workout-details">

            <h4>{workout.title}</h4>

            <p><strong>Load (kg): </strong>{workout.load}</p>

            <p><strong>Reps: </strong>{workout.reps}</p>

            <p><strong>Created At: </strong>{workout.createdAt}</p>

            <div className="workout-actions">

                <button 
                    className="view-btn" 
                    onClick={() =>{
                        setSelectedWorkout(workout)
                        setModalType('view')
                        setModalOpen(true)
                    }}
                >View</button>

                <button 
                    className="edit-btn" 
                    onClick={() =>{
                        setSelectedWorkout(workout)
                        setModalType('edit')
                        setModalOpen(true)
                    }}
                >Edit</button>

                <button 
                    className="delete-btn" 
                    onClick={() =>{
                        setSelectedWorkout(workout)
                        setModalType('delete')
                        setModalOpen(true)
                    }}
                >Delete</button>

            </div>

        </div>

    )

}

export default WorkoutDetails
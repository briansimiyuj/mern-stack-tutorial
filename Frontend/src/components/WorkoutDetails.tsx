import { useWorkoutContext } from "../context/WorkoutContext"
import type { WorkoutType } from "../assets/types/WorkoutType"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"

interface WorkoutDetailsProps{

    workout: WorkoutType

}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ workout })=>{

    const { fetchSingleWorkout, setModalOpen, setSelectedWorkout, setModalType } = useWorkoutContext()

    const openModal = async(type: string) =>{

        const data = await fetchSingleWorkout(workout._id)

        if(data){

            setSelectedWorkout(data)
            
            setModalType(type)
            
            setModalOpen(true)

        }

    }

    return(

        <div className="workout-details">

            <h4>{workout.title}</h4>

            <p><strong>Load (kg): </strong>{workout.load}</p>

            <p><strong>Reps: </strong>{workout.reps}</p>

            <p><strong>Created At: </strong>{formatDistanceToNow(new Date(workout.createdAt) , { addSuffix: true })}</p>

            <div className="workout-actions">

                <button 
                    className="view-btn" 
                    onClick={() => openModal('view')}
                >View</button>

                <button 
                    className="edit-btn" 
                    onClick={() => openModal('edit')}
                >Edit</button>

                <button 
                    className="delete-btn" 
                    onClick={() => openModal('delete')}
                >Delete</button>

            </div>

        </div>

    )

}

export default WorkoutDetails
import { useWorkoutContext } from "../../context/WorkoutContext"
import { useDeleteWorkout } from "../../hooks/useDeleteWorkout"

const DeleteWorkoutModal: React.FC = ()=>{

    const { modalOpen, selectedWorkout, modalType, closeModal } = useWorkoutContext(),
          { handleDelete } = useDeleteWorkout()

    if(!modalOpen || !selectedWorkout || modalType !== 'delete') return null

    return(

        <div className="modal-overlay">

            <div className="modal">

                <h3>Delete Workout</h3>

                <p>{`Are you sure you want to delete ${selectedWorkout.title}?`}</p>

                <button type="button" className="delete-btn modal-close-btn" onClick={() => handleDelete()}>Delete</button>

                <button type="button" className="modal-close-btn" onClick={() => closeModal()}>Cancel</button>

            </div>

        </div>

    )

}

export default DeleteWorkoutModal

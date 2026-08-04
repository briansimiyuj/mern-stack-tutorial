import { useWorkoutContext } from "../../context/WorkoutContext"

const ViewWorkoutModal: React.FC = ()=>{

    const { modalOpen, selectedWorkout, modalType, setModalOpen, setSelectedWorkout, setModalType } = useWorkoutContext()

    if(!modalOpen || !selectedWorkout || modalType !== 'view') return null

    return(

        <div className="modal-overlay">

            <div className="modal">

                <h3>Workout Details</h3>

                <p><strong>Title: </strong>{selectedWorkout.title}</p>

                <p><strong>Load (kg): </strong>{selectedWorkout.load}</p>

                <p><strong>Reps: </strong>{selectedWorkout.reps}</p>

                <p><strong>Created At: </strong>{selectedWorkout.createdAt}</p>

                <button type="button" className="modal-close-btn" onClick={() => {

                    setModalOpen(false)
                    setSelectedWorkout(null)
                    setModalType(null)

                }}>Close</button>

            </div>

        </div>

    )

}

export default ViewWorkoutModal

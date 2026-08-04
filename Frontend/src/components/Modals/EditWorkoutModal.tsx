import { useWorkoutContext } from "../../context/WorkoutContext"

const EditWorkoutModal: React.FC = ()=>{

    const { modalOpen, selectedWorkout, modalType, title, setTitle, reps, setReps, load, setLoad, closeModal } = useWorkoutContext()

    if(!modalOpen || !selectedWorkout || modalType !== 'edit') return null


    return(

        <div className="modal-overlay">

            <div className="modal">

                <h3>Edit Workout</h3>

                <form>

                    <label>Title</label>

                    <input 
                        type="text" 
                        value={title || selectedWorkout.title} 
                        onChange={e => setTitle(e.target.value)}
                    />

                    <label>Load (kg)</label>

                    <input 
                        type="number" 
                        value={load || selectedWorkout.load} 
                        onChange={e => setLoad(Number(e.target.value))}
                    />

                    <label>Reps</label>

                    <input 
                        type="number" 
                        value={reps || selectedWorkout.reps} 
                        onChange={e => setReps(Number(e.target.value))}
                    />

                    <button type="submit" className="modal-close-btn">Save Changes</button>

                </form>

                <button type="button" className="modal-close-btn" onClick={() => closeModal()}>Close</button>

            </div>

        </div>

    )

}

export default EditWorkoutModal

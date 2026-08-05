import { useWorkoutContext } from "../context/WorkoutContext"
import { useSubmitWorkout } from "../hooks/useSubmitWorkout"

const WorkoutForm: React.FC = ()=>{

    const { title, setTitle, reps, setReps, load, setLoad, error } = useWorkoutContext(),
          { handleSubmit } = useSubmitWorkout()

    return(

        <form onSubmit={handleSubmit} className="create">

            <h3>Add a New Workout</h3>

            <label htmlFor="title">Exercise Title:</label>

            <input
               type="text"
               value={title}
               onChange={e => setTitle(e.target.value)}
            />
        
            <label htmlFor="load">Load (in kg):</label>

            <input
               type="number"
               value={load ?? ''}
               onChange={e => setLoad(Number(e.target.value))}
            />

            <label htmlFor="reps">Reps:</label>

            <input
               type="number"
               value={reps ?? ''}
               onChange={e => setReps(Number(e.target.value))}
            />

            <button>Add Workout</button>

            {
            
                error &&(
            
                    <div className="error">{error}</div>
            
                )
            
            }

        </form>

    )

}

export default WorkoutForm
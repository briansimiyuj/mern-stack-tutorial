import { useWorkoutContext } from "../context/WorkoutContext"
import { useSubmitWorkout } from "../hooks/useSubmitWorkout"

const WorkoutForm: React.FC = ()=>{

    const { title, setTitle, reps, setReps, load, setLoad, error, emptyFields } = useWorkoutContext() as { title: string; setTitle: (val: string) => void; reps: number | null; setReps: (val: number) => void; load: number | null; setLoad: (val: number) => void; error: string | null; emptyFields: string[] },
          { handleSubmit } = useSubmitWorkout()

    return(

        <form onSubmit={handleSubmit} className="create">

            <h3>Add a New Workout</h3>

            <label htmlFor="title">Exercise Title:</label>

            <input
               type="text"
               value={title}
               onChange={e => setTitle(e.target.value)}
               className={emptyFields.includes('title') ? 'error' : ''}
            />
        
            <label htmlFor="load">Load (in kg):</label>

            <input
               type="number"
               value={load ?? ''}
               onChange={e => setLoad(Number(e.target.value))}
               className={emptyFields.includes('load') ? 'error' : ''}
            />

            <label htmlFor="reps">Reps:</label>

            <input
               type="number"
               value={reps ?? ''}
               onChange={e => setReps(Number(e.target.value))}
               className={emptyFields.includes('reps') ? 'error' : ''}
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
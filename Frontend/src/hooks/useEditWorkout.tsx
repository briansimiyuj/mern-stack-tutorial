import { useAuthContext } from "../context/AuthContext"
import { useWorkoutContext } from "../context/WorkoutContext"

export const useEditWorkout = () =>{

    const { title, reps, load, selectedWorkout, setError, setLoad, setReps, setTitle, closeModal } = useWorkoutContext(),
          { authUser } = useAuthContext()

    const handleEdit = async(e: React.SubmitEvent<HTMLFormElement>) =>{
    
        e.preventDefault()

        if(!authUser){

            setError('You must be logged in to edit a workout.')

            return

        }

        if(!selectedWorkout) return

        const workout = { title, reps, load },
                response = await fetch(`http://localhost:4000/api/workouts/${selectedWorkout._id}`, {

                    method: "PUT",
                    credentials: "include",
                    headers:{
                      "Content-Type": "application/json"
                    },

                    body: JSON.stringify(workout)

                }),
                data = await response.json()

        if(!response.ok){

            setError(data.error)

        }

        if(response.ok){
            
            setError(null)

            setTitle('')

            setReps(0)

            setLoad(0)

            closeModal()

            console.log('Workout Updated', data)

        }
            
    }

    return { handleEdit }

}
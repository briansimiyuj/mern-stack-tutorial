import { useAuthContext } from "../context/AuthContext"
import { useWorkoutContext } from "../context/WorkoutContext"

export const useSubmitWorkout = () =>{

    const { title, reps, load, setError, setLoad, setReps, setTitle, setEmptyFields } = useWorkoutContext(),
          { authUser } = useAuthContext()

    const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) =>{
    
        e.preventDefault()

        if(!authUser){

            setError('You must be logged in to submit a workout.')
         
            return

        }

        const workout = { title, reps, load },
                response = await fetch("http://localhost:4000/api/workouts/create", {

                    method: "POST",
                    credentials: "include",
                    headers:{
                      "Content-Type": "application/json"
                    },

                    body: JSON.stringify(workout)

                }),
                data = await response.json()

        if(!response.ok){

            setError(data.error)

            setEmptyFields(data.emptyFields ?? [])

        }

        if(response.ok){
            
            setError(null)

            setTitle('')

            setReps(null)

            setLoad(null)

            setEmptyFields([])

            console.log('New Workout Added', data)

        }
            
    
    }

    return { handleSubmit }

}
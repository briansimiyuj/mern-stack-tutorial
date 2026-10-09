import { useAuthContext } from "../context/AuthContext"
import { useWorkoutContext } from "../context/WorkoutContext"

export const useDeleteWorkout = () =>{

    const { selectedWorkout, setError, closeModal } = useWorkoutContext(),
         { authUser } = useAuthContext()

    const handleDelete = async() =>{

        if(!authUser){

            setError('You must be logged in to delete a workout.')

            return

        }

        if(!selectedWorkout) return

        const response = await fetch(`http://localhost:4000/api/workouts/${selectedWorkout._id}`, {

            method: "DELETE",
            credentials: "include"

        }),
        data = await response.json()

        if(!response.ok){

            setError(data.error)

        }

        if(response.ok){
            
            setError(null)

            closeModal()

            console.log('Workout Deleted', data)

        }

    }

    return { handleDelete }

}
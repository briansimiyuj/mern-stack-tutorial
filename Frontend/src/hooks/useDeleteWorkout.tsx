import { useWorkoutContext } from "../context/WorkoutContext"

export const useDeleteWorkout = () =>{

    const { selectedWorkout, setError, closeModal } = useWorkoutContext()

    const handleDelete = async() =>{

        if(!selectedWorkout) return

        const response = await fetch(`http://localhost:4000/api/workouts/${selectedWorkout._id}`, {

            method: "DELETE"

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
import { useWorkoutContext } from "../context/WorkoutContext"

export const useEditWorkout = () =>{

    const { title, reps, load, selectedWorkout, setError, setLoad, setReps, setTitle, closeModal } = useWorkoutContext()

    const handleEdit = async(e: React.SubmitEvent<HTMLFormElement>) =>{
    
        e.preventDefault()

        if(!selectedWorkout) return

        const workout = { title, reps, load },
                response = await fetch(`http://localhost:4000/api/workouts/${selectedWorkout._id}`, {

                    method: "PUT",
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
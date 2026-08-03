import { useWorkoutContext } from "../context/WorkoutContext"

export const useSubmitWorkout = () =>{

    const { title, reps, load, setError, setLoad, setReps, setTitle } = useWorkoutContext()

    const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) =>{
    
        e.preventDefault()

        const workout = { title, reps, load },
                response = await fetch("http://localhost:4000/api/workouts/create", {

                    method: "POST",
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

            console.log('New Workout Added', data)

        }
            
    
    }

    return { handleSubmit }

}
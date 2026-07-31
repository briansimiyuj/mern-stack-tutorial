import Workout from "../models/Workout.js"

const getWorkouts = async(req, res) =>{

    res.json({ message: "get workouts" })

}

const getSingleWorkout = async(req, res) =>{

    res.json({ message: "get single workout" })

}

const createWorkout = async(req, res) =>{

    const { title, reps, load } = req.body

    try{
    
        const workout = await Workout.create({ title, reps, load })

        res.status(201).json(workout)
    
    }catch(error){

        res.status(400).json({ error: error.message })
    
        console.log('Error: ', error)
    
    }

}

const deleteWorkout = async(req, res) =>{

    res.json({ message: "delete workout" })

}

const updateWorkout = async(req, res) =>{

    res.json({ message: "update workout" })

}

export { getWorkouts, getSingleWorkout, createWorkout, deleteWorkout, updateWorkout }
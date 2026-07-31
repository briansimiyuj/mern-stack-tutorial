import Workout from "../models/Workout.js"

const getWorkouts = async(req, res) =>{

    try{
    
        const workouts = await Workout.find().sort({ createdAt: -1 })

        if(workouts){
            
            res.status(200).json(workouts)
            
        }else{
            
            return res.status(404).json({ message: "No workouts found" })

        }

    
    }catch(error){

        res.status(400).json({ error: error.message })
    
        console.log('Error: ', error)
    
    }

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
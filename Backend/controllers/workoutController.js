import mongoose from "mongoose"
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

    try{

        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){

            return res.status(404).json({ message: "No workout found" })
            
        }
    
        const workout = await Workout.findById(id)

        if(workout){

            res.status(200).json(workout)

        }else{

            return res.status(404).json({ message: "No workout found" })

        }
    
    }catch(error){

        res.status(400).json({ error: error.message })
    
        console.log('Error: ', error)
    
    }

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

    try{
    
        const workout = await Workout.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: "Workout deleted successfully",
            workout
        })
    
    }catch(error){

        res.status(400).json({ error: error.message })
    
        console.log('Error: ', error)
    
    }

}

const updateWorkout = async(req, res) =>{

    try{
    
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            message: "Workout updated successfully",
            workout
        })
    
    }catch(error){

        res.status(400).json({ error: error.message })
    
        console.log('Error: ', error)
    
    }

}

export { getWorkouts, getSingleWorkout, createWorkout, deleteWorkout, updateWorkout }
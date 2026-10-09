import mongoose from "mongoose"
import Workout from "../models/Workout.js"

const getWorkouts = async(req, res) =>{

    try{
    
        const workouts = await Workout.find({ user: req.user._id }).sort({ createdAt: -1 })

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
    
        const workout = await Workout.findOne({ _id: id, user: req.user._id })

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

    const { title, reps, load } = req.body,
          user = req.user._id

    let emptyFields = []

    if(!title){

        emptyFields.push('title')

    }

    if(reps === null || reps === undefined){

        emptyFields.push('reps')

    }

    if(load === null || load === undefined){

        emptyFields.push('load')

    }

    if(emptyFields.length > 0){

        return res.status(400).json({ error: "Please fill in all fields", emptyFields })

    }

    try{
    
        const workout = await Workout.create({ title, reps, load, user })

        res.status(201).json(workout)
    
    }catch(error){

        res.status(400).json({ error: error.message })
    
        console.log('Error: ', error)
    
    }

}

const deleteWorkout = async(req, res) =>{

    try{

        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){

            return res.status(404).json({ message: "No workout found" })

        }
    
        const workout = await Workout.findOneAndDelete({ _id: id, user: req.user._id })

        if(!workout){

            return res.status(404).json({ message: "No workout found" })

        }

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

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({ message: "No workout found" })

    }

    const { ...updates } = req.body

    try{
    
        const workout = await Workout.findOneAndUpdate({ _id: id, user: req.user._id }, updates, { new: true })

        if(!workout){

            return res.status(404).json({ message: "No workout found" })
            
        }

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
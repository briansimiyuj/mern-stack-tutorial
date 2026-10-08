import express from "express"
import { createWorkout, deleteWorkout, getSingleWorkout, getWorkouts, updateWorkout } from "../controllers/workoutController.js"
import verifyToken from "../middlewares/verifyToken.js"

const workoutRoute = express.Router()

workoutRoute.get("/", getWorkouts)

workoutRoute.get("/:id", getSingleWorkout)

workoutRoute.use(verifyToken)

workoutRoute.delete("/:id", deleteWorkout)

workoutRoute.put("/:id", updateWorkout)

workoutRoute.post("/create", createWorkout)

export default workoutRoute
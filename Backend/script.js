import express from "express"
import workoutRoute from "./routes/workoutRoute.js"
import connectDB from "./config/DBConnect.js"

const app = express(),
      PORT = process.env.PORT

app.use(express.json()) 

connectDB()

app.use("/api/workouts", workoutRoute)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
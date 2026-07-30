import express from "express"
import workoutRoute from "./routes/workoutRoute.js"

const app = express(),
      PORT = process.env.PORT

app.use(express.json()) 

app.use("/api/workouts", workoutRoute)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
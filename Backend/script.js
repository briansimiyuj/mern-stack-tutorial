import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import workoutRoute from "./routes/workoutRoute.js"
import connectDB from "./config/DBConnect.js"
import userRoute from "./routes/userRoute.js"

const app = express(),
      PORT = process.env.PORT

app.use(cors({

    origin: "http://localhost:3000",
    credentials: true

}))

app.use(express.json()) 

app.use(cookieParser())

connectDB()

app.use("/api/workouts", workoutRoute)

app.use("/api/user", userRoute)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
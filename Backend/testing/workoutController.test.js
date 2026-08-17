import { beforeEach, describe, expect, it, test, vi } from "vitest"
import { invalidID, mockMongoose, mockObjectID, mockWorkoutModel, resetMocks, sampleWorkout, sampleWorkouts, validID } from "./mocks/workoutMock.js"
import { createWorkout, deleteWorkout, getSingleWorkout, getWorkouts } from "../controllers/workoutController.js"

vi.mock("mongoose", () => ({

    default: mockMongoose,
    ...mockMongoose,
    Types: {

        ...mockMongoose.Types,
        ObjectId: mockObjectID,
        ObjectID: mockObjectID

    }

}))

vi.mock("../models/Workout.js", () =>({

    default: mockWorkoutModel

}))

describe("test workout", () =>{

    let req, res

    beforeEach(() =>{

        req = {}
        res ={

            status: vi.fn().mockReturnThis(),
            json: vi.fn().mockReturnThis()

        }

        resetMocks()
        
    })

    test("should return all workouts when they exist", async () =>{

        mockWorkoutModel.find.mockReturnValue({

            sort: vi.fn().mockResolvedValue(sampleWorkouts)

        })

        await getWorkouts(req, res)

        expect(mockWorkoutModel.find).toHaveBeenCalled()

        expect(mockWorkoutModel.find().sort).toHaveBeenCalledWith({ createdAt: -1 })

        expect(res.status).toHaveBeenCalledWith(200)

        expect(res.json).toHaveBeenCalledWith(sampleWorkouts)

    })

    test("should return a 404 error when no workouts exist", async () =>{

        mockWorkoutModel.find.mockReturnValue({

            sort: vi.fn().mockResolvedValue(null)

        })

        await getWorkouts(req, res)

        expect(mockWorkoutModel.find).toHaveBeenCalled()

        expect(res.status).toHaveBeenCalledWith(404)

        expect(res.json).toHaveBeenCalledWith({ message: "No workouts found" })

    })


}) 

describe("test getSingleWorkout", () =>{

    let req, res

    beforeEach(() =>{

        req = { params: {} }
        res ={

            status: vi.fn().mockReturnThis(),
            json: vi.fn().mockReturnThis()

        }

        resetMocks()

    })

    test("should return a workout when it exists", async () =>{

        req.params.id = validID

        mockObjectID.isValid.mockReturnValue(true)      

        mockWorkoutModel.findById.mockResolvedValue(sampleWorkout)

        console.log('mockWorkoutModel.findById:', mockWorkoutModel.findById)

        await getSingleWorkout(req, res)

        console.log('findById calls:', mockWorkoutModel.findById.mock.calls)
        

        expect(mockObjectID.isValid).toHaveBeenCalledWith(req.params.id)

        expect(mockWorkoutModel.findById).toHaveBeenCalledWith(req.params.id)

        expect(res.status).toHaveBeenCalledWith(200)

        expect(res.json).toHaveBeenCalledWith(sampleWorkout)

    })

})

describe("create workout", () =>{
    
    let req, res

    beforeEach(() =>{

        req = { body: {} }
        res ={

            status: vi.fn().mockReturnThis(),
            json: vi.fn().mockReturnThis()

        }

        resetMocks()

    })
    
    test("should return a 400 error the title is missing", async() =>{
    
        req.body = { reps: 20, load: 5 }

        await createWorkout(req, res)

        expect(res.status).toHaveBeenCalledWith(400)

        expect(res.json).toHaveBeenCalledWith({ 

            error: "Please fill in all fields",
            emptyFields: ["title"]

        })

        expect(mockWorkoutModel.create).not.toHaveBeenCalled()
    
    })

    test("should create a workout when all fields are filled", async() =>{
    
        const newWorkout = { title: "Squats", reps: 20, load: 5 },
              createdWorkout = { ...newWorkout, _id: "3" }

        req.body = newWorkout

        mockWorkoutModel.create.mockResolvedValue(createdWorkout)

        await createWorkout(req, res)

        expect(mockWorkoutModel.create).toHaveBeenCalledWith(newWorkout)

        expect(res.status).toHaveBeenCalledWith(201)

        expect(res.json).toHaveBeenCalledWith(createdWorkout)
    
    })

    test("should return a 400 error when database error occurs", async() =>{
    
        const newWorkout = { title: "Squats", reps: 20, load: 5 },
              error = new Error("Database connection failed")

        req.body = newWorkout

        mockWorkoutModel.create.mockRejectedValue(error)

        await createWorkout(req, res)

        expect(mockWorkoutModel.create).toHaveBeenCalledWith(newWorkout)

        expect(res.status).toHaveBeenCalledWith(400)

        expect(res.json).toHaveBeenCalledWith({ error: error.message })
    
    })

})

describe("delete workout", () =>{

    let req, res

    beforeEach(() =>{

        req = { params: {} }
        res ={

            status: vi.fn().mockReturnThis(),
            json: vi.fn().mockReturnThis()

        }

        resetMocks()

    })

    test("should delete a workout when it exists", async () =>{

        req.params.id = validID

        mockObjectID.isValid.mockReturnValue(true)      

        mockWorkoutModel.findByIdAndDelete.mockResolvedValue(sampleWorkout)

        await deleteWorkout(req, res)

        expect(mockObjectID.isValid).toHaveBeenCalledWith(req.params.id)

        expect(mockWorkoutModel.findByIdAndDelete).toHaveBeenCalledWith(req.params.id)

        expect(res.status).toHaveBeenCalledWith(200)

        expect(res.json).toHaveBeenCalledWith({


            message: "Workout deleted successfully",
            workout: sampleWorkout

        })

    })

    test("should return a 404 error when workout does not exist", async () =>{

        req.params.id = invalidID

        mockObjectID.isValid.mockReturnValue(false)      

        mockWorkoutModel.findByIdAndDelete.mockResolvedValue(null)

        await deleteWorkout(req, res)

        expect(mockObjectID.isValid).toHaveBeenCalledWith(req.params.id)

        expect(res.status).toHaveBeenCalledWith(404)

        expect(res.json).toHaveBeenCalledWith({ message: "No workout found" })

        expect(mockWorkoutModel.findByIdAndDelete).not.toHaveBeenCalled()

    })
    
})
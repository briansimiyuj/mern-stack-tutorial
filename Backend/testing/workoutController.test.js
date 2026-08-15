import { beforeEach, describe, expect, it, test, vi } from "vitest"
import { mockMongoose, mockObjectID, mockWorkoutModel, resetMocks, sampleWorkout, sampleWorkouts, validID } from "./mocks/workoutMock.js"
import { getSingleWorkout, getWorkouts } from "../controllers/workoutController.js"

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
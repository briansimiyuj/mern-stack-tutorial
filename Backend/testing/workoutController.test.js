import { beforeEach, describe, expect, it, test, vi } from "vitest"
import { mockWorkoutModel, resetMocks, sampleWorkouts } from "./mocks/workoutMock.js"
import { getWorkouts } from "../controllers/workoutController"

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
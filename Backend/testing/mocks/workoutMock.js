import { vi } from "vitest"

const mockWorkoutModel ={

    find: vi.fn(),
    findByID: vi.fn(),
    create: vi.fn(),
    findByIDAndUpdate: vi.fn(),
    findByIDAndDelete: vi.fn()

}

const mockObjectID ={

    isValid: vi.fn()

}

const mockMongoose ={

    Types:{

        ObjectID: mockObjectID

    }

}

const sampleWorkouts =[

    { _id: "1", title: "Push-ups", reps: 20, load: 5, createdAt: new Date() },
    { _id: "2", title: "Pull-ups", reps: 10, load: 10, createdAt: new Date() }
    
]

const sampleWorkout ={

    _id: "507f1f77bcf86cd799439011",
    title: "Push-ups",
    reps: 20,
    load: 5,
    createdAt: new Date()
    
}

const validID = '507f1f77bcf86cd799439011',
      invalidID = 'invalidID'

const resetMocks = () =>{

    vi.clearAllMocks()

    Object.values(mockWorkoutModel).forEach(mock =>{

        if(mock.mockReset) mock.mockReset()

    })

    mockObjectID.isValid.mockReset()

}

export { mockWorkoutModel, mockMongoose, sampleWorkouts, sampleWorkout, validID, invalidID, resetMocks }
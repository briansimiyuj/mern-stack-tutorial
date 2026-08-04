import { createContext, useContext, useEffect, useState } from "react"
import type { WorkoutContextProps } from "../assets/contextProps/WorkoutContextProps"
import type { WorkoutType } from "../assets/types/WorkoutType"

interface WorkoutContextProviderProps{

    children: React.ReactNode

}

export const WorkoutContext = createContext<WorkoutContextProps | undefined>(undefined)

export const WorkoutContextProvider:React.FC<WorkoutContextProviderProps> = ({ children })=>{

    const [workouts, setWorkouts] = useState<WorkoutType[]>([]),
          [workout, setWorkout] = useState<WorkoutType | null>(null),
          [title, setTitle] = useState<string>(''),
          [reps, setReps] = useState<number>(0),
          [load, setLoad] = useState<number>(0),
          [error, setError] = useState<string | null>(null),
          [modalOpen, setModalOpen] = useState<boolean>(false),
          [selectedWorkout, setSelectedWorkout] = useState<WorkoutType | null>(null),
          [modalType, setModalType] = useState<string | null>(null)

    useEffect(() =>{
        
        const fetchWorkout = async() =>{
        
            const response = await fetch("http://localhost:4000/api/workouts"),
                    data = await response.json()
        
            if(response.ok){
                
                setWorkouts(data)

            }
            
        }

        fetchWorkout()
    
    }, [workouts])

    const fetchSingleWorkout = async(ID: string): Promise<WorkoutType | null> =>{
    
        const response = await fetch(`http://localhost:4000/api/workouts/${ID}`),
              data = await response.json()

        if(response.ok){

            setWorkout(data)

            return data

        }else{

            setError(data.error)

            setWorkout(null)

            return null

        }
    
    }

    const contextValue: WorkoutContextProps ={

        workouts,
        workout,
        fetchSingleWorkout,
        title,
        setTitle,
        reps,
        setReps,
        load,
        setLoad,
        error,
        setError,
        modalOpen,
        setModalOpen,
        selectedWorkout,
        setSelectedWorkout,
        modalType,
        setModalType

    }

    return(

        <WorkoutContext.Provider value={contextValue}>

            {children}

        </WorkoutContext.Provider>

    )

}

export const useWorkoutContext = () =>{

     const context = useContext(WorkoutContext)

     if(!context) throw new Error('useWorkoutContext must be used within WorkoutContextProvider')

     return context

}
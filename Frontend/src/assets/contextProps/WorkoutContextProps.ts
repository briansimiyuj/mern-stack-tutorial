import type { WorkoutType } from "../types/WorkoutType"

export interface WorkoutContextProps{

    workouts: WorkoutType[],
    title: string,
    setTitle: (title: string) => void,
    reps: number,
    setReps: (reps: number) => void,
    load: number,
    setLoad: (load: number) => void

}
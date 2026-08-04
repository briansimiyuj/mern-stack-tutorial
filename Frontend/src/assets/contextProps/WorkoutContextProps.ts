import type { WorkoutType } from "../types/WorkoutType"

export interface WorkoutContextProps{

    workouts: WorkoutType[],
    workout: WorkoutType | null,
    fetchSingleWorkout: (ID: string) => Promise<WorkoutType | null>,
    title: string,
    setTitle: (title: string) => void,
    reps: number,
    setReps: (reps: number) => void,
    load: number,
    setLoad: (load: number) => void,
    error: string | null,
    setError: (error: string | null) => void,
    modalOpen: boolean,
    setModalOpen: (modalOpen: boolean) => void,
    selectedWorkout: WorkoutType | null,
    setSelectedWorkout: (selectedWorkout: WorkoutType | null) => void,
    modalType: string | null,
    setModalType: (modalType: string | null) => void,
    closeModal: () => void

}
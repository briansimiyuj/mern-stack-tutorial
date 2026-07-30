const getWorkouts = async(req, res) =>{

    res.json({ message: "get workouts" })

}

const getSingleWorkout = async(req, res) =>{

    res.json({ message: "get single workout" })

}

const createWorkout = async(req, res) =>{

    res.json({ message: "create workout" })

}

const deleteWorkout = async(req, res) =>{

    res.json({ message: "delete workout" })

}

const updateWorkout = async(req, res) =>{

    res.json({ message: "update workout" })

}

export { getWorkouts, getSingleWorkout, createWorkout, deleteWorkout, updateWorkout }
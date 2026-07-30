import express from "express"

const app = express(),
      PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
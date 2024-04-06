import express from "express";


const app = express()
const PORT = 3000;

app.get('/', (req, resp) => {
    resp.send("<h1>Welcome to home Route</h1>")
})

app.listen(PORT, ()=>{
    console.log("App is running on port ", PORT)
})
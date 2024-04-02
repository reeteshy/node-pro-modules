import express from "express";
import serveIndex from "serve-index";

const app = express()
const PORT = 3000;

app.use('/ftp', express.static('public/ftp'), serveIndex('public/ftp', {'icons': true, hidden:true}))
// app.use('/', serveIndex)

// app.get('/', (req, resp) => {
//     resp.send("<h1>Welcome to home Route</h1>")
// })

app.listen(PORT, ()=>{
    console.log("App is running on port ", PORT)
})
import compression from "compression";
import express from "express";
const app = express()
const PORT = 3000;

app.use(compression({
    level:6,
    threshold:0, //each data should be compressed
    threshold:100 * 1000, //less then 100KB data should not be compressed
    filter : (req, resp)=>{
        if(req.headers['x-no-compression']){
            return false;
        }
        return compression.filter(req, res)
    }
}))

app.get('/', (req, resp) => {
    resp.send("<h1>Welcome to home Route</h1>")
})


app.get('/value', (req, resp) => {
    resp.send('Welcome to home Route'.repeat(1000))
})

app.listen(PORT, ()=>{
    console.log("App is running on port ", PORT)
})
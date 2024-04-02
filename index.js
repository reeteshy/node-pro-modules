import express from "express";
import path from 'path'
import fs from 'fs'
import https from 'https'
import { fileURLToPath } from 'url';

const app = express()

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);



app.get('/', (req, resp) => {
    resp.send("<h1>Welcome to home Route</h1>")
})



https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
}, app).listen(PORT, ()=>{
    console.log("App is running on port ", PORT)
})


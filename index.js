import express from "express";
import fileUpload from "express-fileupload";
import path, {dirname } from "path";
import { fileURLToPath } from 'url';


const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;

app.set('view engine', 'ejs')
app.use(fileUpload())

app.get('/', async (req, resp) => {
    resp.render('index')
})

app.post('/single', async (req, resp, next)=>{
    try {
        const file = req.files.mFile
        console.log("file ", file)
        const savePath = path.join(__dirname, 'public', 'upload', file.name)
        await file.mv(savePath)
        resp.redirect('/')

    } catch (error) {
        console.log("Error file upload : ", error)
        resp.send("Error file upload")
    }
})

app.listen(PORT, ()=>{
    console.log("App is running on port ", PORT)
})
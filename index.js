import express from "express";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

const app = express()
const PORT = 3000;

app.use(limiter)

app.get('/', (req, resp) => {
    resp.send("<h1>Hello World</h1>")
})


app.get('/api/v1/login', (req, resp) => {
    resp.send("<h1>Login view page</h1>")
})
app.post('/api/v1/login', (req, resp) => {
    resp.send("<h1>Post login form</h1>")
})

app.get('/api/v1/register', (req, resp) => {
    resp.send("<h1>register view page</h1>")
})
app.post('/api/v1/register', (req, resp) => {
    resp.send("<h1>Post register form</h1>")
})

app.listen(PORT, ()=>{
    console.log("App is running on port ", PORT)
})
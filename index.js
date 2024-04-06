import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express()
const PORT = 3000;

app.get('/', createProxyMiddleware({
    target: 'http://localhost:3000/setcookies',
    changeOrigin: true,
  }), (req, resp) => {
    resp.send("<h1>Welcome to home Route</h1>")
})

app.get('/setcookies',  (req, resp) => {
    resp.send("<h1>Welcome to Secret Route</h1>")
})

app.get('/getcookies',  (req, resp) => {
    console.log("Cookies ", req.cookies)
    resp.setHeader('Set-Cookie', 'token=value', {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7 // 1 week
      })
    resp.send("<h1>Welcome to Secret Route</h1>")
})

app.get('/deletecookies',  (req, resp) => {
    resp.send("<h1>Welcome to Secret Route</h1>")
})

app.listen(PORT, ()=>{
    console.log("App is running on port ", PORT)
})
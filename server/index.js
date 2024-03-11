const express=require('express')
const app=express()
const port=8000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.post('/api/form-post',(request,respones) =>{
    let name = request.body.name || ''
    let email = request.body.email || ''
    let msg = request.body.message || ''
    let text = `
        <table border = "1">
            <captio>ข้อมูลที่ส่งขึ้นไป</captio>
            <tr><td>ชื่อ: </td><td>${name}</td></tr>
            <tr><td>อีเมล: </td><td>${email}</td></tr>
            <tr><td>ข้อความ: </td><td>${message}</td></tr>
        </table>
        `
})


app.get('/',(requst,response)=>{
    response.send(`
    <!doctype html>
    <html>
    <head>
        <title>Express.js</title>
    </head>
    <body>
        <h3>Welcome to Express.js</h3>
        <b>Express.js Fast, unopinionated, minimalist <br>
        web framework for Node.js</b>
    </body>
    </html>
    `)
})
app.listen(port, () => console.log('Server listening on port'+port))
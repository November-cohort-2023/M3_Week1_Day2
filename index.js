const express = require('express')


const morgan = require('morgan')

const students = require('./data/students.json')



const app = express()

app.use(morgan('dev'))

// All my static files are in the public folder
app.use(express.static('public'))

app.use(express.json())



// Middleware




// Anytime we see app.use() this is performing a middleware function

app.get('/',(req,res)=>{


    res.json({name:"Omar"})
})


app.get('/students/something',(req,res)=>{

    res.json("MY SOMETHING ROUTE")
})



app.get('/students/:id',(req,res)=>{


    res.json("1 student route")
})








app.get('/students',(req,res)=>{


    res.json(students)

})


// console.log(__dirname)

app.get('/about',(req,res)=>{



    res.sendFile(__dirname + '/views/about.html')
})


app.listen(5005)
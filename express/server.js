import fs from 'fs'
import https from 'https'
import express from 'express'

// const { StudentClient } = require("classcharts-api")
import { StudentClient } from 'classcharts-api'

var app = express()
import cors from 'cors'
app.use(cors())

app.post('/api', async (req, res) => {
  if (req.secure) {
    console.log("request recieved from" + req.ip)
    var classCode = req.headers.classcode
    var DOB = req.headers.dateofbirth
    const student = new StudentClient(classCode, DOB)
    await student.login();
    const today = new Date(2023,4,9)
    const startOfWeek = firstDayOfWeek(today)
    var days = []
    for (let i = 0; i < 5; i++) {
      let weekString
      let day = []
      let d = 0
      weekString = startOfWeek.getFullYear() + "-" + (startOfWeek.getMonth() + 1) + "-" + (startOfWeek.getDate() + i)
      const Lessons = await student.getLessons({date: weekString})
      Lessons.data.forEach((lesson) => {
        let name = lesson.subject_name
        let room = lesson.room_name
        let period = [name, room]
        day[d] = period
        d++
      })
      days[i] = day
    }
    res.json(days)
  } 
})

function firstDayOfWeek( date ) {
  var day = date.getDay() || 7;  
  if( day !== 1 ) 
      date.setHours(-24 * (day - 1)); 
  return date;
}
const date = new Date()
console.log(firstDayOfWeek(date, 2))


https.createServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
},app
).listen(4000, () => {
  console.log("Server is running on port 4000")
})  
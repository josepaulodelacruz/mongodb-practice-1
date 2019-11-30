const mongoose = require('mongoose')

//Connection
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log('unable to connecto to the database', err))

//Create  structure schema

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
})

// create model
const Courses = mongoose.model('Courses', courseSchema)

async function getCourses () {
    return await Courses
                    .find({ isPublished: true, tags: 'backend' })
                    .sort({ name: 1 })
                    .select({ name: 1, author: 1 })
}

async function run () {
    const courses = await getCourses()
    console.log(courses)
}

run()

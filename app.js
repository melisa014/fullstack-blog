// подключаем необходимые модули (пакеты)
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const keys = require('./keys')

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.error(err))

// достаём переменную из глобального массива env, если такая там существует или 5000
const port = process.env.PORT || 5000
// создаём путь от корня директории до папки client
const clientPath = path.join(__dirname, 'client')

const app = express()

// делаем папку client статической
app.use(express.static(clientPath))

// колбек функция запустится при старте сервера
app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})
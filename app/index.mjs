import express from 'express'
import initializeDB from './db.mjs'
import router from './routes/sensor.mjs'
import sensorDatas from './routes/sensor_data.mjs'
import auth_sensor from './middleware/auth_sensor.mjs'
import data from './routes/data.mjs'

const app = express()
initializeDB()

app.use(express.json())
app.use('/sensor', router)
app.use('/sensor-data', auth_sensor, sensorDatas)
app.use('/data', data)

app.listen(3000, () => 'App is up and running on port 3000')
import express from 'express'
import crypto from 'crypto'
import SensorDatas from '../models/sensor_datas.mjs'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const reqBody = req.body
    const id = crypto.randomBytes(20).toString('hex')
    const sensorData = await SensorDatas.create({
      id,
      sensor_id: req.headers.sensor_id,
      value: reqBody.value
    })
    res.send(sensorData)
  } catch (ex) {
    console.log('Failed to store sensor data ', ex)
    res.sendStatus(400)
  }
})

export default router
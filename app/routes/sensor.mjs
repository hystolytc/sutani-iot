import express from 'express'
import crypto from 'crypto'
import Sensors from '../models/sensors.mjs'

const router = express.Router()

router.get('/', async (_, res) => {
  try {
    const sensors = await Sensors.findAll()
    res.send(sensors)
  } catch (ex) {
    console.log('Failed to get sensors ', ex)
    res.send(400)
  }
})

router.get('/:sensor_id', async (req, res) => {
  try {
    const sensorDatas = await Sensors.findAll({where: {sensor_id: req.params.sensor_id}})
    res.send(sensorDatas)
  } catch (ex) {
    console.log(`Failed to get sensor with id ${req.params.sensor_id} `, ex)
    res.send(400)
  }
})

router.post('/register', async (req, res) => {
  try {
    const reqBody = req.body
    const id = crypto.randomBytes(20).toString('hex')
    const sensor = await Sensors.create({
      id,
      sensor_id: reqBody.sensor_id,
      name: reqBody.name,
      type: reqBody.type,
      region: reqBody.region
    })
    res.send(sensor)
  } catch (ex) {
    console.log('Failed to creating sensor data ', ex)
    res.sendStatus(404)
  }
})

router.delete('/:id', (_, res) => {
  res.send({
    delete: true
  })
})

export default router

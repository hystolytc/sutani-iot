import express from 'express'
import SensorDatas from '../models/sensor_datas.mjs'

const router = express.Router()

router.get('/', async (_, res) => {
  try {
    const sensorDatas = await SensorDatas.findAll()
    res.send(sensorDatas)
  } catch (ex) {
    console.log('Failed to get sensor data ', ex)
    res.send(400)
  }
})

router.get('/:sensor_id', async (req, res) => {
  try {
    const sensorDatas = await SensorDatas.findAll({where: {sensor_id: req.params.sensor_id}})
    res.send(sensorDatas)
  } catch (ex) {
    console.log(`Failed to get sensor data with id ${req.params.sensor_id} `, ex)
    res.send(400)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await SensorDatas.destroy({where: {id: req.body.id}})
    res.sendStatus(200)
  } catch (ex) {
    console.log(`Failed to delete sensor data with id=${id} `, ex)
    res.sendStatus(400)
  }
})

export default router
import Sensors from '../models/sensors.mjs'

const auth_sensor = async (req, res, next) => {
  try {
    const sensor_id = req.headers.sensor_id
    const sensor = await Sensors.findOne({where: {sensor_id}})
    if (sensor && sensor.sensor_id === sensor_id) next()
    else  res.sendStatus(404)
  } catch (ex) {
    console.log('Auth middleware error ', ex)
    res.sendStatus(400)
  }
}

export default auth_sensor
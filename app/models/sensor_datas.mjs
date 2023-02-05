import { DataTypes } from 'sequelize'
import { sequelize } from '../db.mjs'

const SensorDatas = sequelize.define('sensor_datas', {
  id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  sensor_id: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.STRING, allowNull: false },
})

export default SensorDatas
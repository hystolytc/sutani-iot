import { DataTypes } from 'sequelize'
import { sequelize } from '../db.mjs'

const Sensors = sequelize.define('sensors', {
  id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  sensor_id: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  region: { type: DataTypes.STRING, allowNull: false }
})

export default Sensors
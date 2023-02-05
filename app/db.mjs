import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('iot', 'root', 'test', {
  host: process.env.DB_HOST,
  port: 3306,
  dialect: 'mysql'
})

const initializeDB = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: false })
  } catch (ex) {
    console.log('Failed to connect DB ', ex)
  }
}

export default initializeDB
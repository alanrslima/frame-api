import env from '@/main/config/env'
import mysql, { type Connection } from 'mysql2'

export const MysqlDataSource = {
  connection: null as Connection | null,

  async connect (): Promise<void> {
    this.connection = mysql.createConnection({
      host: env.mysqlHost,
      user: env.mysqlUser,
      database: env.mysqlDatabase,
      password: env.mysqlPassword,
      port: env.mysqlPort
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  }
}

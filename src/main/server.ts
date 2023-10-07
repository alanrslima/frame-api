import 'module-alias/register'
// import 'reflect-metadata'
// import app from '@/main/config/app'
import env from '@/main/config/env'
import { MysqlDataSource } from '@/infra/data-source/mysql/mysql-data-source'

MysqlDataSource.connect().then(async () => {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => { console.log(`Server running at http://localhost:${env.port}`) })
}).catch(console.error)

import { errorHandler } from '../middlewares/error-handler'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
// import setupSwagger from './swagger'

import express from 'express'

const app = express()

// setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)

app.use(errorHandler)

export default app

import express from 'express'
import { homeController } from '../controllers/homeController.mjs'
const router = express.Router()



router.get('/home',homeController)

export default router
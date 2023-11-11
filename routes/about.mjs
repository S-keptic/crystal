import express from 'express'
const router = express.Router()
import { aboutController } from '../controllers/aboutController.mjs'

router.get('/about',aboutController)

export default router
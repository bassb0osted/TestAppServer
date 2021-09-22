import Router from 'express'
import BankController from './BankController.js'

const router = new Router()
router.post('/banks', BankController.create)
router.get('/banks', BankController.getAll)
router.put('/banks', BankController.update)
router.delete('/banks', BankController.delete)

export default router;
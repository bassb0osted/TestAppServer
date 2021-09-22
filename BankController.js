import BankService from './BankService.js'

class BankController {

    async create(req, res) {
        try {
            const bank = await BankService.create(req.body)
            res.status(200).json({"message": "Successfully created"})
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const bank = await BankService.getAll()
            res.json(bank)
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const bank = await BankService.update(req.body)
            res.status(200).json({"message": "Successfully updated"})
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const bank = await BankService.delete(req.body)
            res.status(200).json({"message": "Successfully deleted"})
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new BankController();
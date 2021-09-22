import BankSchema from './BankSchema.js'

class BankService {

    async create(bank) {
        const createdBank = await BankSchema.create(bank)
        return createdBank;
    }

    async getAll() {
        const banks = await BankSchema.find()
        return banks
    }

    async update(bank) {
        if (!bank._id) {
            throw new Error('ID is not specified')
        }
        const udatedBank = await BankSchema.findByIdAndUpdate(bank._id, bank, {new: true})
        return udatedBank;
    }

    async delete(bank) {
        if (!bank._id) {
            throw new Error('ID is not specified')
        }
        const deltetedBank = await BankSchema.findByIdAndDelete(bank._id)
        return deltetedBank;
    }

}

export default new BankService();
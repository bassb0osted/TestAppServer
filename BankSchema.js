import mongoose from 'mongoose'

const BankSchema = new mongoose.Schema({
    bankName: {type: String, required: true},
    interestRate: {type: Number, required: true},
    maximumLoan: {type: Number, required: true},
    minimumDownPayment: {type: Number, required: true},
    loanTerm: {type: Number, required: true},
    cardTransactionFee: {type: Number, required: true},
    minimumDepositInterestRate: {type: Number, required: true}
})

export default mongoose.model('BankSchema', BankSchema)
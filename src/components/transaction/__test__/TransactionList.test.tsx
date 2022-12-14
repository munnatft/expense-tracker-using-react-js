import { render, screen } from "test-utils"
import TransactionList from "../TransactionList"
import styles from "../Transaction.module.css"

const transaction: Transaction = {
    _id: "1",
    type: "Income",
    title: "New Salary",
    amount: "25000"
}

const newTransaction: Transaction = {
    _id: "2",
    type: "Expense",
    title: "Bought Car",
    amount: "2500000"
}

describe("TransactionList", ()=>{
    test("should render income type transaction list", async()=>{
        render(<TransactionList transaction={transaction} />)
        const title = screen.getByText(/new salary/i)
        const amount = screen.getByText("Rs 25000")
        expect(title).toBeInTheDocument()
        expect(amount).toBeInTheDocument()
        expect(amount).toHaveClass(styles['income-type'])
    })

    test("should check expense type transaction list", async()=>{
        render(<TransactionList transaction={newTransaction} />)
        const title = screen.getByText(/bought car/i)
        const amount = screen.getByText("Rs 2500000")
        expect(title).toBeInTheDocument()
        expect(amount).toBeInTheDocument()
        expect(amount).toHaveClass(styles['expense-type'])
    })
})
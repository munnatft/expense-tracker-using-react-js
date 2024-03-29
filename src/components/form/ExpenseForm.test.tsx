import { render, screen, fireEvent } from "test-utils"
import ExpenseForm from "./ExpenseForm"


const checkInputValidation = (placeholderText: string, errorText: string) => {
    const inputElement = screen.getByPlaceholderText(placeholderText) as HTMLInputElement
    const buttonElement = screen.getByRole("button", {name: /Add/i})
    expect(inputElement.value).toBe("")
    fireEvent.submit(buttonElement)
    const errorElement = screen.getByText(errorText)
    expect(errorElement).toBeInTheDocument()
}

const changeInputValue = (placeholderText: string, value: string) => {
    const inputElement = screen.getByPlaceholderText(placeholderText) as HTMLInputElement
    expect(inputElement.value).toBe("")
    fireEvent.change(inputElement, { target: { value: value}})
    expect(inputElement.value).toBe(value)
}

describe("ExpenseForm", ()=> {
    test("should render heading tag", async()=>{
        render(<ExpenseForm />)
        const headingElement = screen.getByText(/Add Income\/Expense/i)
        expect(headingElement).toBeInTheDocument()
    })

    test("should render two inputs html tag", async() => {
        render(<ExpenseForm />)
        const titleInputElement = screen.getByPlaceholderText(/Enter title.../i)
        const amountInputElement = screen.getByPlaceholderText(/Enter amount.../i)
        expect(titleInputElement).toBeInTheDocument()
        expect(amountInputElement).toBeInTheDocument()
    })

    test("should change title and amount input value when we type", async() => {
        render(<ExpenseForm />)
        changeInputValue("Enter title...", "Salary")
        changeInputValue("Enter amount...", "25000")
    })

    test("should render select tag and change also on choosing option", async() => {
        render(<ExpenseForm />)
        const selectElement = screen.getByLabelText(/choose-type/i) as HTMLSelectElement
        expect(selectElement.value).toBe("Income")
        fireEvent.change(selectElement, { target: { value: "Expense"}})
        expect(selectElement.value).toBe("Expense")
    })

    test("should check title input validation on submitting form", async() => {
        render(<ExpenseForm />)
        checkInputValidation("Enter title...", "Title field is required.")
    })

    test("should check amount input validation on submitting form", async()=>{
        render(<ExpenseForm />)
        checkInputValidation("Enter amount...", "Amount should be numbers i.e., [0-9].")
    })

})

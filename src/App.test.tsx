import { findAllByRole, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import App from "./App"
import ErrorBoundary from "./components/error/ErrorBoundary"
import { store } from "./Store"

const MockApp = () => (
    <Provider store={store}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>
)

describe("App", ()=> {
    test("should render heading tag", async()=>{
        render(<MockApp />)
        const headingElement = screen.getByText(/My Budget Tracker/i)
        expect(headingElement).toBeInTheDocument()
    })

    test("should render image tag", async()=>{
        render(<MockApp />)
        const imageElement = screen.getByAltText(/expense-tracker/i)
        expect(imageElement).toBeInTheDocument()
    })

    test("should render another transaction when clicking on add button", async()=>{
        userEvent.setup()
        render(<MockApp />)
        const handleAddTransaction = jest.fn()

        const selectElement = screen.getByRole('combobox', { name: /choose\-type/i })
        const titleInputElement = screen.getByPlaceholderText('Enter title...')
        const amountInputElement = screen.getByPlaceholderText('Enter amount...')
        const addButton = screen.getByRole('button', { name: /add/i })

        await userEvent.selectOptions(selectElement, "Income")
        await userEvent.type(titleInputElement, "Sold laptop")
        await userEvent.type(amountInputElement, "20000")
        
        await userEvent.click(addButton)

        expect(titleInputElement).toHaveValue('')
        expect(amountInputElement).toHaveValue('')
        
        const listElement = await screen.findByText("Sold laptop")
        const listElements = await screen.findAllByRole("listitem")
        expect(listElement).toBeInTheDocument()
        expect(listElements).toHaveLength(3)
    })
})

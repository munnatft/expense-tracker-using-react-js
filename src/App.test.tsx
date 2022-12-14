import { render, screen } from "@testing-library/react"
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


})

import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../../Store"
import Transaction from "../Transaction"


const WrappedTransaction = () => {
    return (
        <Provider store={store}>
            <Transaction  />
        </Provider>
    )
}

describe("Transaction", ()=>{
    test("should render transaction component correctly", () => {
        render(<WrappedTransaction />)
        const textHeadingElement = screen.getByText(/history of transactions/i)
        expect(textHeadingElement).toBeInTheDocument()

        const unorderedListElement = screen.getByRole("list")
        expect(unorderedListElement).toBeInTheDocument()
    })

    test("should render a list of length 2 in the transaction component", async()=>{
        render(<WrappedTransaction />)

        const listElements = await screen.findAllByRole("listitem")
        expect(listElements).toHaveLength(2)
    })
})
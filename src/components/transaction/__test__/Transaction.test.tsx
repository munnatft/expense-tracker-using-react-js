import { render, screen, waitForElementToBeRemoved } from "test-utils"
import userEvent from "@testing-library/user-event"
import Transaction from "../Transaction"


describe("Transaction", ()=>{
    test("should render transaction component correctly", () => {
        render(<Transaction />)
        const textHeadingElement = screen.getByText(/history of transactions/i)
        expect(textHeadingElement).toBeInTheDocument()

        const unorderedListElement = screen.getByRole("list")
        expect(unorderedListElement).toBeInTheDocument()
    })

    test("should render a list of length 2 in the transaction component", async()=>{
        render(<Transaction />)

        const listElements = await screen.findAllByRole("listitem")
        expect(listElements).toHaveLength(2)
    })

    test("should delete transaction when click on cross button", async()=> {
        userEvent.setup()
        render(<Transaction />)

        const deleteButton =  await screen.findByLabelText("delete-transaction-0")
        expect(deleteButton).toBeInTheDocument()

        await userEvent.click(deleteButton)

        await waitForElementToBeRemoved(()=>screen.queryByText("Salared"))

    })
})
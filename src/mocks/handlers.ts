import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://auth-app-81dfd-default-rtdb.firebaseio.com/transactions.json",
    (req, res, ctx) => {
      return res(
        ctx.json({
          "-NF4kgztj31QVz8j_o9E": {
            amount: "5000000",
            title: "Salared",
            type: "Income",
          },
          "-Nkjhiuewhnbwium": {
            amount: "245553",
            title: "miewumxp",
            type: "Expense",
          },
        })
      );
    }
  ),
  rest.post('https://auth-app-81dfd-default-rtdb.firebaseio.com/transactions.json', (req,res,ctx)=>{
    return res(ctx.json({ name: "NJ90kJIHf3fdiJiAXo_"}))
  }),
  rest.delete('https://auth-app-81dfd-default-rtdb.firebaseio.com/transactions/:id.json', (req,res,ctx)=>{
    return res(ctx.status(200))
  })
];

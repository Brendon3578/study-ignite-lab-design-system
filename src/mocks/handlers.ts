import { rest } from 'msw';

export const handlers = [
  rest.post("/sessions", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "Login realizado!",
      })
    );
  })
]
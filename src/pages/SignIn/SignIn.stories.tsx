import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { handlers } from "../../mocks/handlers";

export default {
  title: "Pages/Sign in",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: handlers,
    },
  },
} as Meta;

/*
  OBS: no Github Pages o MSW apresenta um erro
  (é possível vê-lo dentro do console, apontando que o script
  "mockServiceWorker.js não foi encontrado")
*/
export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "johndoe@example.com"
    );
    userEvent.type(canvas.getByPlaceholderText("***********"), "12345");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
    });
  },
};

import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";

it("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const buttonLogin = screen.getByRole("button", { name: "log-in" });
  expect(buttonLogin).toBeInTheDocument();
});

it("should check if cart exisit or not or if it is 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const buttonLogin = screen.getByText(/Cart - 0/);
  expect(buttonLogin).toBeInTheDocument();
});

it("should login logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const buttonLogin = screen.getByText("log-in");
  fireEvent.click(buttonLogin);
  const buttonLogout = screen.getByText("log-out");
  expect(buttonLogout).toBeInTheDocument();
});

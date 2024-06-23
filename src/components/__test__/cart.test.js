import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

console.log();

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Drinks - (9)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  expect(screen.getByText(/Cart - 0/)).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - 1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - 2")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  fireEvent.click(screen.getByRole("button", { name: "clear cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  expect(
    screen.getByText("Your cart is empty. Add items to cart")
  ).toBeInTheDocument();
});

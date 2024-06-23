import { act, render, fireEvent, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// write mock fetch function

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component and test the search with burger query", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  // rendering it in jsdom fetch is browser native function
  // not core part of js
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  // console.log(cardsBeforeSearch.length);
  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});

it("should filter all toprated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  // rendering it in jsdom fetch is browser native function
  // not core part of js
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  // console.log(cardsBeforeSearch.length);
  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(4);
});

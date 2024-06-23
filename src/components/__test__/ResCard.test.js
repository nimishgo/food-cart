import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import res from "../mocks/resMockData.json";
import "@testing-library/jest-dom";

it("Should render rescard with props data", () => {
  render(<RestaurantCard resData={res} />);
  const checkTitle = screen.getByText("Ramdev Pure Veg");

  expect(checkTitle).toBeInTheDocument();
});

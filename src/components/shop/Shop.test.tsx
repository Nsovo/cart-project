
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Shop from "./Shop";
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe("Shop component", () => {
    let store: any;
  
    beforeEach(() => {
      store = mockStore({
        products: {
          products: [
            {
              id: 1,
              name: "Product 1",
              price: 10,
              quantity: 1,
              image: "product1.jpg",
            },
            {
              id: 2,
              name: "Product 2",
              price: 20,
              quantity: 1,
              image: "product2.jpg",
            },
          ],
          loading: false,
          error: null,
        },
      });
    });
  
    it("should renders shop component", () => {
      render(
        <Provider store={store}>
          <Shop />
        </Provider>
      );
  
      expect(screen.getByText("Little Fish Shop")).toBeInTheDocument();
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  
    it("should adds item to cart", () => {
      render(
        <Provider store={store}>
          <Shop />
        </Provider>
      );
  
      fireEvent.click(screen.getByText("Add to Cart"));
  
      expect(screen.getByText("Successfully added to cart!")).toBeInTheDocument();
    });
  
    it("should toggles cart", () => {
      render(
        <Provider store={store}>
          <Shop />
        </Provider>
      );
  
      fireEvent.click(screen.getByLabelText("Open cart"));
  
      expect(screen.getByLabelText("Close cart")).toBeInTheDocument();
  
      fireEvent.click(screen.getByLabelText("Close cart"));
  
      expect(screen.getByLabelText("Open cart")).toBeInTheDocument();
    });
  });
  
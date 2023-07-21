import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // Arrange
    window.fetch = jest.fn(); // we override built in method with dummy method
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    // Act
    // nothing

    // Assert
    // getAllByRole immediately get the items on screen. But this is async code
    const listItemElements = await screen.findAllByRole("listitem"); // these return a promise. any of the find methods
    expect(listItemElements).not.toHaveLength(0);
  });
});

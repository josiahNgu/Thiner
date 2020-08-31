import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import RedirectLink from "./RedirectLink";
import axios from "axios";
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(cleanup);
jest.mock("axios");
it("get original link from database and redirect user", async () => {
  mockedAxios.post.mockResolvedValue({
    originalLink: "www.amazon.com",
  });
  await expect(window.location.href).toBe("www.amazon.com");
  // expect(getByTestId("originalURL")).toHaveTextContent();
});

import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import URLForm from "./URLForm";
import axios from "axios";
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(cleanup);
jest.mock("axios");
const component = render(<URLForm />);
it("post user originalLink and motto to database", async () => {
  mockedAxios.post.mockResolvedValue({
    statusCode: 201,
    motto: "test",
  });
  await expect(submitHandler).toBe("");
  // expect(getByTestId("originalURL")).toHaveTextContent();
});
